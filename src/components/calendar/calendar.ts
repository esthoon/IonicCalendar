import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  today:Date=new Date();
  displayDate:Date=new Date();
  month=new Array();
  day=new Array();
  Year=[];
  text:Number;
  obj=new Array();
  maxYear;
  minYear;

  @Output() selector = new EventEmitter<any>();

  constructor() {
    this.setMonth();
    this.setYear();
    this.setDay();
    this.setObject();
  }

  returnLastDate(month, year){
    let date = new Date(year, month, 0)
    return date.getDate();
  }

  setObject(){
    let month=this.displayDate.getMonth()+1;
    let year =this.displayDate.getFullYear();
    let lastDate = this.returnLastDate(month, year);
    var array1 = new Array();
    var array = new Array();
    for(let i=1; i<=lastDate; i++){
      let date = this.returnDate(year, month-1, i)
      let day=date.getDay();
      array[day]=i;
      if(day==6 || (i==lastDate)){
        array1.push(array);
        array=new Array();
      }
    }
    this.obj=array1;
  }

  setMonth(){
    this.month[0] = "January";
    this.month[1] = "February";
    this.month[2] = "March";
    this.month[3] = "April";
    this.month[4] = "May";
    this.month[5] = "June";
    this.month[6] = "July";
    this.month[7] = "August";
    this.month[8] = "September";
    this.month[9] = "October";
    this.month[10] = "November";
    this.month[11] = "December";
  }

  setDay(){
    this.day[0] = 'Su';
    this.day[1] = 'Mo';
    this.day[2] = 'Tu';
    this.day[3] = 'We';
    this.day[4] = 'Th';
    this.day[5] = 'Fr';
    this.day[6] = 'Sa';
  }

  returnDate(year,month,date){
    return new Date(year,month,date);
  }

  setYear(){
    let Year = new Array();
    this.minYear=this.today.getFullYear()-10;
    this.maxYear=this.today.getFullYear()+10;
    for(let i=-10;i<=10;i++){
      let year = this.today.getFullYear()+i;
      Year.push(year);
    }
    this.Year=Year;
  }

  clickPrevious(){
    this.displayDate=new Date(this.displayDate.setMonth(this.displayDate.getMonth()-1));
    this.setObject();
  }

  clickNext(){
    this.displayDate=new Date(this.displayDate.setMonth(this.displayDate.getMonth()+1));
    this.setObject();
  }

  selectYear(event){
    let y= event.target.value;
    this.displayDate=new Date(this.displayDate.setFullYear(y));
    this.setObject();
  }

  selectMonth(event){
    let m= event.target.value;
    this.displayDate=new Date(this.displayDate.setMonth(m));
    console.log(this.displayDate);
    this.setObject();
  }

  alert(day){
    alert(day);
  }

}
