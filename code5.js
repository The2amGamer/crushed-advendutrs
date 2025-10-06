gdjs.Untitled_32scene6Code = {};
gdjs.Untitled_32scene6Code.localVariables = [];
gdjs.Untitled_32scene6Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene6Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene6Code.GDNewSliderObjects1= [];
gdjs.Untitled_32scene6Code.GDNewSliderObjects2= [];
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects1= [];
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects2= [];
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects1= [];
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects2= [];
gdjs.Untitled_32scene6Code.GDgrassObjects1= [];
gdjs.Untitled_32scene6Code.GDgrassObjects2= [];
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects1= [];
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects2= [];
gdjs.Untitled_32scene6Code.GDDADOORObjects1= [];
gdjs.Untitled_32scene6Code.GDDADOORObjects2= [];
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects1= [];
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects2= [];
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects1= [];
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects2= [];
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects1= [];
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects2= [];
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects1= [];
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects2= [];


gdjs.Untitled_32scene6Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSlider"), gdjs.Untitled_32scene6Code.GDNewSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene6Code.GDNewSliderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene6Code.GDNewSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene6Code.GDNewSliderObjects1[k] = gdjs.Untitled_32scene6Code.GDNewSliderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene6Code.GDNewSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene6Code.GDNewSliderObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.Untitled_32scene6Code.GDNewSliderObjects1.length === 0 ) ? 0 :gdjs.Untitled_32scene6Code.GDNewSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "852e5428a3f8db4ccf526af9c68da39148540cd277bcd8c1c1b145be600a5d18_16 - ultra legend of the mega quest alpha.aac", true, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};

gdjs.Untitled_32scene6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene6Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSliderObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSliderObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene6Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;

gdjs.Untitled_32scene6Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene6Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSliderObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSliderObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritekyjObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene6Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene6Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene6Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene6Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;


return;

}

gdjs['Untitled_32scene6Code'] = gdjs.Untitled_32scene6Code;
