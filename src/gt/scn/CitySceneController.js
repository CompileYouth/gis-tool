import Scene from "./Scene";
import SceneController from "./SceneController";

import CityEditor from "../view/CityEditor";

export default class CitySceneController extends SceneController
{    
    createView()
    {
        const scene = new Scene({
            id: "cityScene",
            title: "CITY"
        });
        scene.$element.children("aside").remove();
        scene.$element.children("main").css({
            left: 0
        });
        
        this.mapView = scene.mapView;
        this.mapView.boundLayer.bindCityBounds("project>/city/bounds");
        
        this.cityEditor = new CityEditor();
        this.cityEditor.bindName("project>/city/name");
        this.cityEditor.bindCode("project>/city/code");
        scene.addSubview(this.cityEditor, scene.$element);
        
        return scene;
    }
}
