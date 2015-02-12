# anglular-tooltip
An useful tooltip control as an AngularJs directive

# How to use

  attr name   |     type        |   description    
--------------| ----------------|-------------------------------------------------------------------
tooltipText   | one-way binding | sets the text for the ToolTip
tooltipClass  | one-way binding | sets the Cascading Style Sheet (CSS) class for the ToolTip


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
