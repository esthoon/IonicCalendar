import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';

@NgModule({
	declarations: [CalendarComponent],
	imports: [CommonModule, PopoverModule],
	exports: [CalendarComponent, PopoverModule]
})
export class ComponentsModule {}
