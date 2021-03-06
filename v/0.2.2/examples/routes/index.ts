import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ComponentsService, IComponentMeta} from "../services/components";
import {NavigationService} from "../services/navigation";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {DOM} from "angular2/src/platform/dom/dom_adapter";
import {Highlight} from "../highlight";
import {SidenavService} from "../../ng2-material/components/sidenav/sidenav_service";
import {TimerWrapper} from "angular2/src/facade/async";

@Component({
  templateUrl: 'examples/routes/index.html',
  directives: [ROUTER_DIRECTIVES, Highlight, MATERIAL_DIRECTIVES]
})
export class IndexPage implements OnInit {
  public components: IComponentMeta[] = [];

  constructor(private _components: ComponentsService,
              private _sidenav: SidenavService,
              public navigation: NavigationService) {
  }

  ngOnInit(): any {
    TimerWrapper.setTimeout(() => {
      this._sidenav.hide('menu');
    }, 0);
    this._components.getComponents()
      .then((comps) => {
        this.components = comps;
        let title = 'Angular2 Material';
        DOM.setTitle(title);
        this.navigation.currentTitle = title;
        this.navigation.prevLink = this.navigation.componentLink(comps[comps.length - 1]);
        this.navigation.nextLink = this.navigation.componentLink(comps[0]);
      });
  }

}
