import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showDiv = false;
  mySection = "";
  title = "perfect";
  name = "Angular";
  tools = ["Angular", "React", "Node"];

  giveName() {
    // alert("Good morning");
    this.showDiv = !this.showDiv;

    // false  =
  }

  changeSection(section, x) {
    this.mySection = section;
  }
}
