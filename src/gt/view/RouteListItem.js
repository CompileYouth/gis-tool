import ListItem from "sap/a/view/ListItem";

export default class RouteListItem extends ListItem
{
    metadata = {
        properties: {
            route: { type: "object", bindable: true }
        },
    };
    
    initLayout()
    {
        this.$directionIcon = $(`<i class="direction-icon icon ion-arrow-up-c"></i>`);
        this.$container.append(this.$directionIcon);
        super.initLayout();
        this.$deleteIcon = $(`<i class="delete-icon icon ion-android-cancel"></i>`);
        this.$deleteIcon.on("click", () => {
            this.getParent().removeItem(this);
        });
        this.$container.append(this.$deleteIcon);
    }
    
    setRoute(value)
    {
        this.setProperty("route", value);
        this.render();
    }
    
    render()
    {
        const route = this.getRoute();
        if (route)
        {
            if (route.direction)
            {
                this.$directionIcon.css("transform", `rotate(${route.direction}deg)`);
            }
            if (route.name)
            {
                this.setText(route.name);
            }
        }
    }    
}
