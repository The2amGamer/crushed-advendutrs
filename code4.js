gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene3Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects1= [];
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects2= [];
gdjs.Untitled_32scene3Code.GDgrassObjects1= [];
gdjs.Untitled_32scene3Code.GDgrassObjects2= [];
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects1= [];
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects2= [];
gdjs.Untitled_32scene3Code.GDDADOORObjects1= [];
gdjs.Untitled_32scene3Code.GDDADOORObjects2= [];
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects1= [];
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects2= [];
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects1= [];
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects2= [];
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects2= [];
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects1= [];
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects2= [];


gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSpritejdsfgj"), gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1[k] = gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1[i].getBehavior("Physics2").setGravity(0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
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


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;

gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;
