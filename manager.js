var buttonPrefix = "+";
var buttonTag = "button";
var categoryTag = "category";
var commandTag = "cmd";
var confirmTag = "confirm";
var displayTag = "display";
var errorTag = "error";
var formatTag = "format";
var linkedTag = "linked";
var nameTag = "name";
var optinTag = "optin";
var originalTag = "url";
var passTag = "pass";
var policyTag = "policy";
var policyNameTag = "policyname";
var quietTag = "quiet";
var reasonTag = "reason";
var redirectTag = "redirect";
var renderTag = "render";
var resetTag = "reset";
var resultTag = "result";
var stageTag = "stage";
var statusTag = "status";
var timeTag = "time";
var versionTag = "version";
var webServerTag = "webServer";

var rawValue = "raw";
var noOriginalValue = "<none>";

var webFilesDir = "/bg/";
var cgiFilesDir = "/cgi-bin/";
var displayUrl = "http://www.go.com/";
var builtinServer = true;

var webServer;
if (!webServer)
   webServer = window.location.protocol + "//" + window.location.host;
var cgiCmdName   = "cmd.pl";
var cgiCmdPrefix = builtinServer ? ""  : cgiCmdName + "?" + commandTag + "=";
var cgiCmdSuffix = builtinServer ? "?" : "&";
var buttonCGI = "button";
var dynCGI = "dyn";
var notifyCGI = "notify";
var redirectCGI = "redirect";

var closeModeDefault = 1;
var closeMode = closeModeDefault;
var iframeMinHeightDefault = 100;
var iframeMinHeight = iframeMinHeightDefault;
var fullMinHeightDefault = 400;
var fullMinHeight = fullMinHeightDefault;
var bailoutOpenerDefault = false;
var bailoutOpener = bailoutOpenerDefault;
var bailoutCrossDomainDefault = 0;
var bailoutCrossDomain = bailoutCrossDomainDefault;
var bulletinDelayDefault = 2000;
var bulletinDelay = bulletinDelayDefault;
var renderDelayDefault = 1000;
var renderDelay = renderDelayDefault;
var notifyBailoutDefault = true;
var notifyBailout = false;
var notifyBailoutActionRenderDefault = 3;
var notifyBailoutActionRender = 2;
var notifyBailoutActionNonRenderDefault = 1;
var notifyBailoutActionNonRender = notifyBailoutActionNonRenderDefault;
var reasonPassUpDefault = false;
var reasonPassUp = reasonPassUpDefault;

var bulletinIncluded = false;
<!--#include virtual="bulletin.js" -->
if (!bulletinIncluded)
   document.writeln('<SCRIPT type="text/javascript" src="' + webServer + webFilesDir + 'bulletin.js"></SCRIPT>');
