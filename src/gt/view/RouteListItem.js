import ListItem from "sap/a/view/ListItem";

export default class RouteListItem extends ListItem
{
    metadata = {
        properties: {
            direction: { type: "int", bindable: true },
            route: { type: "object", bindable: true },
            selected: { type: "boolean" }
        },
    };

    initLayout()
    {
        this.$directionIcon = $(`<i class="direction-icon icon ion-arrow-up-c"></i>`);
        this.$container.append(this.$directionIcon);
        this.$routeName = $(`<span class="text"></span>`);
        this.$container.append(this.$routeName);
        this.$deleteIcon = $(`<i class="delete-icon icon ion-android-cancel"></i>`);
        this.$deleteIcon.on("mousedown", e => {
            this.getParent().fireItemDelete({
                item: this
            });
            e.stopPropagation();
        });
        this.$container.append(this.$deleteIcon);
    }

    setRoute(value)
    {
        this.setProperty("route", value);
    }

    setDirection(value)
    {
        this.setProperty("direction", value);
        this.$directionIcon.css("transform", `rotate(${value ? value : 0}deg)`);
    }
    
    setSelected(value)
    {
        this.setProperty("selected", value);
        this.$container.toggleClass("selected", value);
    }
}
