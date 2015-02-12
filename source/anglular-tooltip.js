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
var ngDvTooltip=angular.module('ngDvTooltip',[]);
ngDvTooltip.directive('ngDvTooltip',function($compile){

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
            var _toolTipContainer =spanItems[spanItems.length-1];


            //////////////////////////////////////////////////////////////////
            //Element mouse events
            element.on('mousemove',function(event){
                showTooltip(event.pageX,event.pageY);
                //emit an event on mouse move and send the ToolTip element
                var ele=$compile(_toolTipContainer)(scope);
                scope.$emit('ngDvTooltip_MouseMove', {tooltipElement:ele});
            });
            element.on('mouseout',function(event){
                hideTooltip();
                //emit an event on mouse out
                scope.$emit('ngDvTooltip_MouseOut');
            });
            //////////////////////////////////////////////////////////////////

            var setTooltipDefaultStyle=function(){
                //sets default layout
                _toolTipContainer.style.position = "absolute";
                _toolTipContainer.style.width = "auto";
                _toolTipContainer.innerHTML=scope.tooltipText;
                if (scope.tooltipClass===undefined){
                    _toolTipContainer.style.background="#FFFFCC";
                    _toolTipContainer.style.border="1px solid #ccc";
                    _toolTipContainer.style.padding="10px";
                    _toolTipContainer.style.borderRadius="8px";
                    _toolTipContainer.style.boxShadow="0 5px 10px rgba(0, 0, 0, 0.2)";
                }
            };

            var showTooltip=function(x,y){
                if (scope.tooltipText===undefined ){
                    return;
                }
                _toolTipContainer.style.visibility="visible";
                _toolTipContainer.style.left = x + "px";
                _toolTipContainer.style.top = y + "px";
            };
            var hideTooltip=function(){
                _toolTipContainer.style.visibility="hidden";
            };

            setTooltipDefaultStyle();
        }
    };
});
