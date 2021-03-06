import {ViewEncapsulation} from "angular2/core";
import {View} from "angular2/core";
import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {MdDialogRef} from "./dialog_ref";
import {KeyCodes} from "../../core/key_codes";
import {forwardRef} from "angular2/core";
import {Directive} from "angular2/core";
import {Host} from "angular2/core";
import {SkipSelf} from "angular2/core";

/**
 * Container for user-provided dialog content.
 */
@Component({
  selector: 'md-dialog-container',
  host: {
    'class': 'md-dialog',
    'tabindex': '0',
    '(body:keydown)': 'documentKeypress($event)',
  },
})
@View({
  encapsulation: ViewEncapsulation.None,
  template: `
    <md-dialog-content></md-dialog-content>
    <div tabindex="0" (focus)="wrapFocus()"></div>`,
  directives: [forwardRef(() => MdDialogContent)]
})
export class MdDialogContainer {
  // Ref to the dialog content. Used by the DynamicComponentLoader to load the dialog content.
  contentRef: ElementRef;

  // Ref to the open dialog. Used to close the dialog based on certain events.
  dialogRef: MdDialogRef;

  constructor() {
    this.contentRef = null;
    this.dialogRef = null;
  }

  wrapFocus() {
    // Return the focus to the host element. Blocked on #1251.
  }

  documentKeypress(event: KeyboardEvent) {
    if (event.keyCode == KeyCodes.ESCAPE) {
      this.dialogRef.close();
    }
  }
}

/**
 * Simple decorator used only to communicate an ElementRef to the parent MdDialogContainer as the
 * location for where the dialog content will be loaded.
 */
@Directive({
  selector: 'md-dialog-content'
})
export class MdDialogContent {
  constructor(@Host() @SkipSelf() dialogContainer: MdDialogContainer, elementRef: ElementRef) {
    dialogContainer.contentRef = elementRef;
  }
}
