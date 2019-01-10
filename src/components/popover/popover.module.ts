import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PopoverComponent } from "./popover";
import { GlobalProvider } from "../../providers/global/global";

@NgModule({
    declarations:[PopoverComponent],
    imports:[
        IonicPageModule.forChild(PopoverComponent)
    ]
})export class PopoverModule{}