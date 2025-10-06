gdjs.Untitled_32scene7Code = {};
gdjs.Untitled_32scene7Code.localVariables = [];
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects1= [];
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects2= [];
gdjs.Untitled_32scene7Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene7Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1= [];
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects2= [];
gdjs.Untitled_32scene7Code.GDgrassObjects1= [];
gdjs.Untitled_32scene7Code.GDgrassObjects2= [];
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects1= [];
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects2= [];
gdjs.Untitled_32scene7Code.GDDADOORObjects1= [];
gdjs.Untitled_32scene7Code.GDDADOORObjects2= [];
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects1= [];
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects2= [];
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects1= [];
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects2= [];
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects1= [];
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects2= [];
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects1= [];
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects2= [];


gdjs.Untitled_32scene7Code.mapOfGDgdjs_9546Untitled_959532scene7Code_9546GDcongrats_95959595yipeeeObjects1Objects = Hashtable.newFrom({"congrats_yipeee": gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects1});
gdjs.Untitled_32scene7Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 3;
if (isConditionTrue_0) {
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32scene7Code.mapOfGDgdjs_9546Untitled_959532scene7Code_9546GDcongrats_95959595yipeeeObjects1Objects, 135, 238, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[k] = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping right");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32scene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene7Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;

gdjs.Untitled_32scene7Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDcongrats_9595yipeeeObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32scene7Code.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32scene7Code.GDgrassObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDgrassObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDDADOORObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDDADOORObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32scene7Code.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32scene7Code.GDanun_9595sus_9595pectingrockObjects2.length = 0;


return;

}

gdjs['Untitled_32scene7Code'] = gdjs.Untitled_32scene7Code;
