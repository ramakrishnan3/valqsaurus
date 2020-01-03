---
id: budget-allocation
title: Budgeting & allocation scenarios
---

## Scenario 1: To increase Total Revenue by 10% and allocate the increase to Sales Revenue with no changes to Other Revenue

1.  For our example, expand the Total Revenue. Now select the node
    'Other Revenue' and lock the node (see Figure below).

    ![Locking node](/doc-images//pl11.png)

2.  Now select the Total Cell for node 'Total Revenue' as shown in the
    below Figure.

    ![Cell selection](/doc-images//pl12.png)

    You can update the number by double clicking the cell and entering the
    number directly in the number bar. Or you can enter the number in the
    popup.
    
3.  Now double click the total cell and type '+10%' at the end of the
    number and click on 'Weight' as shown in the below Figure.

    ![Total cell value increased to 10 %](/doc-images//pl13.png)

4.  You will be able to view the 'Spread by Weights' screen.

    ![Spread by Weights](/doc-images//pl14.png)

    By default, the current node and the current series are selected. You
    can also select different weights to allocate. You can further decide to
    allocate the full amount or the delta amount (see Figure above).
    
    The 'Overwrite Values' option deletes the existing period values and
    rewrites the new allocated value. The 'Append to Values' option will add
    the delta value to the existing period values and only the delta value
    gets allocated based on the selected weights (see Figure above). For our
    example, the Overwrite option has been selected.

5.  As an end result of the Scenario 1, you will be able to view the
    Input Editor screen updated with the configured values (see Figure
    below). The cells which were impacted because of the allocation
    operations turns yellow.

    ![Increased 'Total Revenue' without impacting 'Other
    Revenue'](/doc-images//pl15.png)

## Scenario 2: To increase 'Cost of Sales' by 10% from April onwards

1.  For our example, select the Node 'Cost of Sales' for April month
    a. (see Figure below).

     ![Cell Selection](/doc-images//pl16.png)

2.  Increase the cell value by 10% and click Enter (see Figure below).

    ![Cost of Sales for April increased by 10%](/doc-images//pl17.png)

3.  Now click the “Copy To” icon to copy the value from April across the
    a. periods till December (see Figure below)

    ![Copy-to icon](/doc-images//pl18.png)

4.  After clicking the Copy to icon, the Input Editor screen looks
    a. similar to the Figure shown below.

    ![Constant cell values from Apr to Dec](/doc-images//pl19.png)

## Scenario 3: To increase 'Other Costs' based on a monthly trend of 2%

1.  For our example, select the Node 'Other Costs' for Jan month (see
    a. Figure below).

    ![Cell Selection](/doc-images//pl22.png)

2.  Now click the 'Trend' icon (see Figure below)

    ![Trend icon](/doc-images//pl23.png)

3.  Now the Trend pop up opens. For our example, select the 'By
    a. Percentage' option and enter value 2 in the Increase Trend section.
    b. Now select the Overwrite Values option and click 'Apply' (see Figure
    c. below).

    ![Increasing Trend of 2 %](/doc-images//pl24.png)

4.  Based on the above configuration, you will be able to view the Input
    a. Editor screen as shown below.

    ![Increased monthly trend](/doc-images//pl25.png)

## Scenario 4: To redistribute 'Support Costs' based on 'Cost of Sales'

1.  For our example, select the Node 'Support Costs' in Total column
    (see Figure below).

    ![Cell Selection](/doc-images//pl26.png)

2.  Now click the 'Weight' icon (see Figure below)

    ![Weight icon](/doc-images//pl27.png)

3.  The Spread by Weight pop up opens. For our example, select the Node
    as 'Cost of Sales'. Select the 'Overwrite Values' option and click
    'Apply' (see Figure below).

    ![Spreads by Weights](/doc-images//pl28.png)

4.  As an end result of the Scenario 4, you will be able to view the
    Input Editor screen loaded with the redistributed values (see Figure
    below).

    ![Redistributed values](/doc-images//pl29.png)

## Scenario 5: To increase 'Rent' by 5% for Q1 and 10% from Q2 Onwards

1.  Select the Node 'Rent' and lock the entire Row.
2.  Release the lock for the cells from Jan to Mar.
3.  Now select the cell 'Jan'. Increase the value by 5% (see Figure
    a. below).

    a. ![Rent increased by 5% for Jan Month](/doc-images//pl30.png)

4.  Now copy it across the cells. The Input Editor looks similar to the
    a. Figure as shown below.

    a. ![Rent increased by 5% across the cells in the Row](/doc-images//pl31.png)

5.  Now release the lock for the complete Row of the Node Rent.
6.  Select the cell 'Apr'. Increase the value by 10% (see Figure below).

    a. ![Rent increased by 10% for Apr Month](/doc-images//pl32.png)

7.  Now copy it across the cells. The Input Editor looks similar to the
    a. Figure as shown below.

    a. ![Rent increased by 10% from Apr till Dec](/doc-images//pl33.png)