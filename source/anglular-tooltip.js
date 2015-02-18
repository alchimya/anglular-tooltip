/**
 * Created by domenicovacchiano on 12/02/15.
 */
/**
 * @name        ngDvTooltip
 * @restrict    EA
 * @description
 * Represents a tooltip control.
 * @isolated_scope
 * ------------------------------------------------------------------------------------------------------
 * attr name        type                description
 * ------------------------------------------------------------------------------------------------------
 * tooltipText      one-way binding     sets the text for the ToolTip
 * tooltipClass     one-way binding     sets the Cascading Style Sheet (CSS) class for the ToolTip
 * ------------------------------------------------------------------------------------------------------
 * @events
 * ------------------------------------------------------------------------------------------------------
 * name                     data               description
 * ------------------------------------------------------------------------------------------------------
 * ngDvTooltip_MouseMove    tooltipElement      it will be raised during de mouse move on the ToolTip element and
 *                                              sends a data object with the ToolTip element
 * ngDvTooltip_MouseOut          --             it will be raised during de mouse move on the ToolTip element
 * ------------------------------------------------------------------------------------------------------

 *  -------------------------------------------------------------
 *  Events implementations
 *  -------------------------------------------------------------
 *  $scope.$on('ngDvTooltip_MouseMove',function(event,data){
 *       var element=data.tooltipElement;
 *       //your code
 *   });
 *  $scope.$on('ngDvTooltip_MouseOut',function(event){
 *       //your code
 *   });
 *  -------------------------------------------------------------
 * @example
 * 1) basic usage
 *  <ng-dv-tooltip
 *      tooltip-text="This example represents a basic usage">Move mouse here
 *  </ng-dv-tooltip>
 * 2) ToolTip with a custom layout
 *  <ng-dv-tooltip
 *      tooltip-text="This example uses a custom CSS class"
 *      tooltip-class="tip">Move mouse here
 *  </ng-dv-tooltip>
 * 3) ToolTip as a div attribute
 *  <div
 *      style="background-color:red;width:150px;"
 *      ng-dv-tooltip="testTooltip"
 *      tooltip-text="Tooltip as an attribute of a div element" >Move mouse here
 *  </div>
 */
var ngDvTooltipModule=angular.module('ngDvTooltipModule',[]);
ngDvTooltipModule.directive('ngDvTooltip',function($compile){

    return{
        restrict:'EA',
        replace:false,
        scope:{
            tooltipText:'@',
            tooltipClass:'@'
        },
        link:function(scope,element,attrs){

            //creates a span element that represents our ToolTip
            element.append($compile('<span style="visibility:hidden" ' +
            'class="' + scope.tooltipClass + '"' +
            '></span>')(scope));

            //stores our ToolTip element into a local var
            var spanItems= element.find('span');
            var _toolTipContainer =$compile(spanItems[spanItems.length-1])(scope);

            //////////////////////////////////////////////////////////////////
            //Element mouse events
            element.on("mousemove",function(event){
                showTooltip(event.pageX,event.pageY);
                //emit an event on mouse move and send the ToolTip element
                scope.$emit("ngDvTooltip_MouseMove", {tooltipElement:_toolTipContainer});
            });
            element.on("mouseout",function(event){
                hideTooltip();
                //emit an event on mouse out
                scope.$emit("ngDvTooltip_MouseOut");
            });
            //////////////////////////////////////////////////////////////////

            var setTooltipDefaultStyle=function(){
                //sets default layout
                _toolTipContainer
                    .css("position", "absolute")
                    .css("width", "auto")
                    .text(scope.tooltipText);

                if (scope.tooltipClass===undefined){
                    _toolTipContainer
                        .css("background", "#FFFFCC")
                        .css("border", "1px solid #ccc")
                        .css("padding", "10px")
                        .css("borderRadius", "8px")
                        .css("boxShadow", "0 5px 10px rgba(0, 0, 0, 0.2)");
                }
            };

            var showTooltip=function(x,y){
                if (scope.tooltipText===undefined ){
                    return;
                }
                _toolTipContainer
                    .css("visibility", "visible")
                    .css("left", x + "px")
                    .css("top", y + "px");
            };
            var hideTooltip=function(){
                _toolTipContainer.css("visibility","hidden");
            };

            setTooltipDefaultStyle();
        }
    };
});
