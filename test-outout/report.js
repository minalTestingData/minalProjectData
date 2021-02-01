$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoblazeLogin.feature");
formatter.feature({
  "line": 1,
  "name": "This is Demoblaze login scenario.",
  "description": "",
  "id": "this-is-demoblaze-login-scenario.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login scenario for demoblaze webpage.",
  "description": "",
  "id": "this-is-demoblaze-login-scenario.;login-scenario-for-demoblaze-webpage.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on home page of demoblaze.",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User clicks on Log In link.",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Login window will open.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user will enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Log In button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User will login sucessfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoblazeStepDef.user_is_on_home_page_of_demoblaze()"
});
formatter.result({
  "duration": 11201363900,
  "status": "passed"
});
formatter.match({
  "location": "DemoblazeStepDef.user_clicks_on_Log_In_link()"
});
formatter.result({
  "duration": 50620300,
  "status": "passed"
});
formatter.match({
  "location": "DemoblazeStepDef.login_window_will_open()"
});
formatter.result({
  "duration": 86774900,
  "status": "passed"
});
formatter.match({
  "location": "DemoblazeStepDef.user_will_enter_username_and_password()"
});
formatter.result({
  "duration": 771418700,
  "status": "passed"
});
formatter.match({
  "location": "DemoblazeStepDef.click_on_Log_In_button()"
});
formatter.result({
  "duration": 104171900,
  "status": "passed"
});
formatter.match({
  "location": "DemoblazeStepDef.user_will_login_sucessfully()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
});