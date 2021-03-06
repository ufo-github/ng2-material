"use strict";
var testing_1 = require('@angular/core/testing');
var viewport_ruler_1 = require('./viewport-ruler');
var overlay_position_builder_1 = require('./overlay-position-builder');
// Default width and height of the overlay and origin panels throughout these tests.
var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 60;
// For all tests, we assume the browser window is 1024x786 (outerWidth x outerHeight).
// The karma config has been set to this for local tests, and it is the default size
// for tests on CI (both SauceLabs and Browserstack).
testing_1.describe('ConnectedPositionStrategy', function () {
    var ORIGIN_HEIGHT = DEFAULT_HEIGHT;
    var ORIGIN_WIDTH = DEFAULT_WIDTH;
    var OVERLAY_HEIGHT = DEFAULT_HEIGHT;
    var OVERLAY_WIDTH = DEFAULT_WIDTH;
    var originElement;
    var overlayElement;
    var strategy;
    var fakeElementRef;
    var fakeViewportRuler;
    var positionBuilder;
    var originRect;
    var originCenterX;
    var originCenterY;
    testing_1.beforeEach(function () {
        fakeViewportRuler = new FakeViewportRuler();
        // The origin and overlay elements need to be in the document body in order to have geometry.
        originElement = createPositionedBlockElement();
        overlayElement = createPositionedBlockElement();
        document.body.appendChild(originElement);
        document.body.appendChild(overlayElement);
        fakeElementRef = new FakeElementRef(originElement);
        positionBuilder = new overlay_position_builder_1.OverlayPositionBuilder(new viewport_ruler_1.ViewportRuler());
    });
    afterEach(function () {
        document.body.removeChild(originElement);
        document.body.removeChild(overlayElement);
        // Reset the origin geometry after each test so we don't accidently keep state between tests.
        originRect = null;
        originCenterX = null;
        originCenterY = null;
    });
    testing_1.describe('when not near viewport edge, not scrolled', function () {
        // Place the original element close to the center of the window.
        // (1024 / 2, 768 / 2). It's not exact, since outerWidth/Height includes browser
        // chrome, but it doesn't really matter for these tests.
        var ORIGIN_LEFT = 500;
        var ORIGIN_TOP = 350;
        testing_1.beforeEach(function () {
            originElement.style.left = ORIGIN_LEFT + "px";
            originElement.style.top = ORIGIN_TOP + "px";
            originRect = originElement.getBoundingClientRect();
            originCenterX = originRect.left + (ORIGIN_WIDTH / 2);
            originCenterY = originRect.top + (ORIGIN_HEIGHT / 2);
        });
        // Preconditions are set, now just run the full set of simple position tests.
        runSimplePositionTests();
    });
    testing_1.describe('when scrolled', function () {
        // Place the original element decently far outside the unscrolled document (1024x768).
        var ORIGIN_LEFT = 2500;
        var ORIGIN_TOP = 2500;
        // Create a very large element that will make the page scrollable.
        var veryLargeElement = document.createElement('div');
        veryLargeElement.style.width = '4000px';
        veryLargeElement.style.height = '4000px';
        testing_1.beforeEach(function () {
            // Scroll the page such that the origin element is roughly in the
            // center of the visible viewport (2500 - 1024/2, 2500 - 768/2).
            document.body.appendChild(veryLargeElement);
            document.body.scrollTop = 2100;
            document.body.scrollLeft = 2100;
            originElement.style.top = ORIGIN_TOP + "px";
            originElement.style.left = ORIGIN_LEFT + "px";
            originRect = originElement.getBoundingClientRect();
            originCenterX = originRect.left + (ORIGIN_WIDTH / 2);
            originCenterY = originRect.top + (ORIGIN_HEIGHT / 2);
        });
        afterEach(function () {
            document.body.removeChild(veryLargeElement);
            document.body.scrollTop = 0;
            document.body.scrollLeft = 0;
        });
        // Preconditions are set, now just run the full set of simple position tests.
        runSimplePositionTests();
    });
    testing_1.describe('when near viewport edge', function () {
        testing_1.it('should reposition the overlay if it would go off the top of the screen', function () {
            // We can use the real ViewportRuler in this test since we know that zero is
            // always the top of the viewport.
            originElement.style.top = '5px';
            originElement.style.left = '200px';
            originRect = originElement.getBoundingClientRect();
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.bottom);
            testing_1.expect(overlayRect.left).toBe(originRect.left);
        });
        testing_1.it('should reposition the overlay if it would go off the left of the screen', function () {
            // We can use the real ViewportRuler in this test since we know that zero is
            // always the left edge of the viewport.
            originElement.style.top = '200px';
            originElement.style.left = '5px';
            originRect = originElement.getBoundingClientRect();
            originCenterY = originRect.top + (ORIGIN_HEIGHT / 2);
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originCenterY - (OVERLAY_HEIGHT / 2));
            testing_1.expect(overlayRect.left).toBe(originRect.right);
        });
        testing_1.it('should reposition the overlay if it would go off the bottom of the screen', function () {
            // Use the fake viewport ruler because we don't know *exactly* how big the viewport is.
            fakeViewportRuler.fakeRect = {
                top: 0, left: 0, width: 500, height: 500, right: 500, bottom: 500
            };
            positionBuilder = new overlay_position_builder_1.OverlayPositionBuilder(fakeViewportRuler);
            originElement.style.top = '475px';
            originElement.style.left = '200px';
            originRect = originElement.getBoundingClientRect();
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.bottom).toBe(originRect.top);
            testing_1.expect(overlayRect.right).toBe(originRect.right);
        });
        testing_1.it('should reposition the overlay if it would go off the right of the screen', function () {
            // Use the fake viewport ruler because we don't know *exactly* how big the viewport is.
            fakeViewportRuler.fakeRect = {
                top: 0, left: 0, width: 500, height: 500, right: 500, bottom: 500
            };
            positionBuilder = new overlay_position_builder_1.OverlayPositionBuilder(fakeViewportRuler);
            originElement.style.top = '200px';
            originElement.style.left = '475px';
            originRect = originElement.getBoundingClientRect();
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.bottom);
            testing_1.expect(overlayRect.right).toBe(originRect.left);
        });
    });
    /**
     * Run all tests for connecting the overlay to the origin such that first preferred
     * position does not go off-screen. We do this because there are several cases where we
     * want to run the exact same tests with different preconditions (e.g., not scroll, scrolled,
     * different element sized, etc.).
     */
    function runSimplePositionTests() {
        testing_1.it('should position a panel below, left-aligned', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.bottom);
            testing_1.expect(overlayRect.left).toBe(originRect.left);
        });
        testing_1.it('should position to the right, center aligned vertically', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originCenterY - (OVERLAY_HEIGHT / 2));
            testing_1.expect(overlayRect.left).toBe(originRect.right);
        });
        testing_1.it('should position to the left, below', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.bottom);
            testing_1.expect(overlayRect.right).toBe(originRect.left);
        });
        testing_1.it('should position above, right aligned', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.bottom).toBe(originRect.top);
            testing_1.expect(overlayRect.right).toBe(originRect.right);
        });
        testing_1.it('should position below, centered', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.bottom);
            testing_1.expect(overlayRect.left).toBe(originCenterX - (OVERLAY_WIDTH / 2));
        });
        testing_1.it('should center the overlay on the origin', function () {
            strategy = positionBuilder.connectedTo(fakeElementRef, { originX: 'center', originY: 'center' }, { overlayX: 'center', overlayY: 'center' });
            strategy.apply(overlayElement);
            var overlayRect = overlayElement.getBoundingClientRect();
            testing_1.expect(overlayRect.top).toBe(originRect.top);
            testing_1.expect(overlayRect.left).toBe(originRect.left);
        });
    }
});
/** Creates an absolutely positioned, display: block element with a default size. */
function createPositionedBlockElement() {
    var element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = DEFAULT_WIDTH + "px";
    element.style.height = DEFAULT_HEIGHT + "px";
    element.style.backgroundColor = 'rebeccapurple';
    element.style.zIndex = '100';
    return element;
}
/** Fake implementation of ViewportRuler that just returns the previously given ClientRect. */
var FakeViewportRuler = (function () {
    function FakeViewportRuler() {
        this.fakeRect = { left: 0, top: 0, width: 1014, height: 686, bottom: 686, right: 1014 };
        this.fakeScrollPos = { top: 0, left: 0 };
    }
    FakeViewportRuler.prototype.getViewportRect = function () {
        return this.fakeRect;
    };
    FakeViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
        return this.fakeScrollPos;
    };
    return FakeViewportRuler;
}());
/** Fake implementation of ElementRef that is just a simple container for nativeElement. */
var FakeElementRef = (function () {
    function FakeElementRef(nativeElement) {
        this.nativeElement = nativeElement;
    }
    return FakeElementRef;
}());
//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/overlay/position/connected-position-strategy.spec.js.map