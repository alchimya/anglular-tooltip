# anglular-tooltip
An useful tooltip control as an AngularJs directive

# How to use
<h5>isolatd scope data</h5>

  attr name   |     type        |   description    
--------------| ----------------|-------------------------------------------------------------------
tooltipText   | one-way binding | sets the text for the ToolTip
tooltipClass  | one-way binding | sets the Cascading Style Sheet (CSS) class for the ToolTip

<h5>events</h5>
  event name            |     data        |   description    
--------------          | ----------------|-------------------------------------------------------------------
ngDvTooltip_MouseMove   | tooltipElement  | it will be raised during de mouse move on the ToolTip element and sends a data object with the ToolTip element
ngDvTooltip_MouseOut    |       ***       | it will be raised during de mouse move on the ToolTip element




```javascript
 //1) basic usage
   <ng-dv-tooltip
       tooltip-text="This example represents a basic usage">Move mouse here
   </ng-dv-tooltip>
 //2) ToolTip with a custom layout
   <ng-dv-tooltip
       tooltip-text="This example uses a custom CSS class"
       tooltip-class="tip">Move mouse here
   </ng-dv-tooltip>
 //3) ToolTip as a div attribute
   <div
       style="background-color:red;width:150px;"
       ng-dv-tooltip="testTooltip"
       tooltip-text="Tooltip as an attribute of a div element" >Move mouse here
   </div>
```
<br/>
![ScreenShot](https://raw.github.com/alchimya/anglular-tooltip/master/screenshots/anglular-tooltip.gif)
