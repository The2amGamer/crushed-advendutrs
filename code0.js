gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDSilverKeyObjects1= [];
gdjs.Untitled_32sceneCode.GDSilverKeyObjects2= [];
gdjs.Untitled_32sceneCode.GDsafewallsObjects1= [];
gdjs.Untitled_32sceneCode.GDsafewallsObjects2= [];
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects1= [];
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1= [];
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects2= [];
gdjs.Untitled_32sceneCode.GDgrassObjects1= [];
gdjs.Untitled_32sceneCode.GDgrassObjects2= [];
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects1= [];
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects2= [];
gdjs.Untitled_32sceneCode.GDDADOORObjects1= [];
gdjs.Untitled_32sceneCode.GDDADOORObjects2= [];
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1= [];
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects2= [];
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects1= [];
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects2= [];
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects1= [];
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects = Hashtable.newFrom({"character_1": gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallGreyFlatObjects1Objects = Hashtable.newFrom({"WallGreyFlat": gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects = Hashtable.newFrom({"character_1": gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallGreyFlat2Objects1Objects = Hashtable.newFrom({"WallGreyFlat2": gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1});
gdjs.Untitled_32sceneCode.mapOfEmptyGDcharacter_95951Objects = Hashtable.newFrom({"character_1": []});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects = Hashtable.newFrom({"character_1": gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmy_95959595life_95959595rn_95959595Objects1Objects = Hashtable.newFrom({"my_life_rn_": gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects = Hashtable.newFrom({"character_1": gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSilverKeyObjects1Objects = Hashtable.newFrom({"SilverKey": gdjs.Untitled_32sceneCode.GDSilverKeyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects = Hashtable.newFrom({"character_1": gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDanun_95959595sus_95959595pectingrockObjects1Objects = Hashtable.newFrom({"anun_sus_pectingrock": gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WallGreyFlat"), gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects1);
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallGreyFlatObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WallGreyFlat2"), gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1[i].getBehavior("AdvancedProjectile").IsMaxDistanceExceeded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1[k] = gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WallGreyFlat2"), gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1);
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallGreyFlat2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SilverKey"), gdjs.Untitled_32sceneCode.GDSilverKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSilverKeyObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSilverKeyObjects1[k] = gdjs.Untitled_32sceneCode.GDSilverKeyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DADOOR"), gdjs.Untitled_32sceneCode.GDDADOORObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDADOORObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDADOORObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfEmptyGDcharacter_95951Objects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("my_life_rn_"), gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmy_95959595life_95959595rn_95959595Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SilverKey"), gdjs.Untitled_32sceneCode.GDSilverKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSilverKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSilverKeyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSilverKeyObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSilverKeyObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("anun_sus_pectingrock"), gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects1);
gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcharacter_959595951Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDanun_95959595sus_95959595pectingrockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("character_1"), gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1[i].getBehavior("Animation").setAnimationName("jumping left");
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSilverKeyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsafewallsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsafewallsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDgrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDADOORObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDADOORObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDSilverKeyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSilverKeyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsafewallsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsafewallsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmy_9595life_9595rn_9595Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDcharacter_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDgrassObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgrassObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDADOORObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDADOORObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallGreyFlat2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDa_9595happpy_9595accidentObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpritejdsfgjObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDanun_9595sus_9595pectingrockObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
