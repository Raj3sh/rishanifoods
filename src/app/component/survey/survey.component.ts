import { Component, OnInit } from "@angular/core";
import * as Survey from "survey-angular";

Survey.StylesManager.applyTheme("bootstrap");

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  constructor() {}

  surveyJSON = {
    focusFirstQuestionAutomatic: false,
    completedHtml:
      "Thank you for your request {name}. We'll get in touch with you as soon as possible.",
    pages: [
      {
        name: "contactUs",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Name",
            isRequired: true,
            placeHolder: "Please enter your name",
          },
          {
            type: "text",
            name: "email",
            title: "Email",
            isRequired: true,
            placeHolder: "Please enter your email",
          },
          {
            type: "comment",
            name: "comment",
            title: "Comment",
            isRequired: true,
            placeHolder: "Please enter your query/feedback",
            autoGrow: true,
          },
        ],
      },
    ],
    showPrevButton: false,
    showTitle: false,
    showPageTitles: false,
    showQuestionNumbers: "off",
    questionErrorLocation: "bottom",
    autoGrowComment: true,
    completeText: "Submit",
    widthMode: "responsive",
  };

  ngOnInit(): void {
    let surveyModel = new Survey.Model(this.surveyJSON);
    surveyModel.onComplete.add((survey: Survey.SurveyModel, options: any) => {
      survey.sendResult("8a50452c-8b50-4d71-a495-dbd294ad8a37");
    });
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }
}
