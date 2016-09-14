import Application from "sap/a/app/Application";
import SplitLayout from "sap/a/layout/SplitLayout";
import SuperScene from "sap/a/scn/Scene";

export default class Scene extends SuperScene
{
    metadata = {
        properties: {
            displayFab: { type: "boolean", defaultValue: true }
        }
    };

    afterInit()
    {
        super.afterInit();
        this._initFab();

        this.mapView = Application.getInstance().mapView;
        this.attachActivated(() => {
            this.addSubview(this.mapView, this.$(">.sub-container:nth-child(2)"));
            this.mapView.invalidateSize();
        });
    }

    initLayout()
    {
        this.setLayout(new SplitLayout({
            direction: SplitLayout.HORIZONTAL,
            ratio: [ 300, undefined ]
        }));
    }

    _initFab()
    {
        // TODO
    }
}
