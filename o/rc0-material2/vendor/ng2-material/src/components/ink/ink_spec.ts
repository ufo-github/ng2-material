import {beforeEach, describe, expect, inject, it, async} from "@angular/core/testing";
import {ComponentFixture, TestComponentBuilder} from "@angular/compiler/testing";
import {Component, DebugElement} from "@angular/core";
import {Ink, MdInk} from "../../index";
import {By} from "@angular/platform-browser";

export function main() {

  const defaultTemplate = `<div md-ink></div>`;

  @Component({
    selector: 'test-app',
    directives: [MdInk],
    template: defaultTemplate
  })
  class TestComponent {
  }

  describe('MdInk', () => {

    let builder: TestComponentBuilder;

    function setup(template: string = defaultTemplate): Promise<ComponentFixture<TestComponent>> {
      return builder
        .overrideTemplate(TestComponent, template)
        .createAsync(TestComponent)
        .then((fixture: ComponentFixture<TestComponent>) => {
          fixture.detectChanges();
          return fixture;
        }).catch(console.error.bind(console));
    }

    beforeEach(inject([TestComponentBuilder], (tcb) => {
      builder = tcb;
    }));

    describe('[md-ink]', () => {
      it('should ink ripple when clicked', async(inject([], () => {
        setup().then((fixture: ComponentFixture<TestComponent>) => {
          let element: DebugElement = fixture.debugElement.query(By.css('[md-ink]'));

          let save = Ink.rippleEvent;
          let fired = false;
          Ink.rippleEvent = () => {
            fired = true;
            return Promise.resolve();
          };

          let event = document.createEvent('mouse');
          element.triggerEventHandler('mousedown', event);


          expect(fired).toBe(true);
          Ink.rippleEvent = save;
        });
      })));

      it('should not ink ripple with md-no-ink attribute', async(inject([], () => {
        let template = `<div md-ink md-no-ink></div>`;
        setup(template).then((fixture: ComponentFixture<TestComponent>) => {
          let element: DebugElement = fixture.debugElement.query(By.css('[md-ink]'));
          let save = Ink.rippleEvent;
          let fired = false;
          Ink.rippleEvent = () => {
            fired = true;
            return Promise.resolve();
          };

          let event = document.createEvent('mouse');
          element.triggerEventHandler('mousedown', event);

          expect(fired).toBe(false);
          Ink.rippleEvent = save;
        });
      })));
    });
  });
}

