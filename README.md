# bugs-buddy
A Single page MEAN stack application for Issue tracking ( Ticketing system)


***

Bugs buddy is a Single paged, MEAN stack **Service Manager** application. It can be used by small-medium scale IT companies for their ticketing / support system. 

Note that the system is currently under development. So, not all the processes of ITIL are implemented. I would be updating the read me page as on when a new feature is updated.

Bugs-buddy is ready to use and can be configured easily.Currently bugs-buddy can,

Log an Incident - Defect/Change Request/ Request for Info tickets
Update the ticket (Status, Priority, Release date, etc) - Once the ticket is closed / rejected, it cannot be edited.
An ordered dashboard which displays the current ticketing trends.
Search for a ticket by ID, date or by application.

Note: Ticket type, Status of the ticket, Applications, priority are hard coded. I would be updating the modules for dynamic loading of options from the database in future.


***

**Planned updates.**

bugs-buddy should be able to-

Authentication module ( Roles ; Super user - Administrator - Key User - User(Read Only) ) - Options would be enabled / disabled based on roles.
Generate reports in XLSX format.
Graphical UI for the management (Performance and SLA).
Introduce the concept of SLA breach.
Support for uploading supporting documents for each ticket.
Super user module ( User creation , Edit Closed / rejected tickets, etc.)
Chat System. 

I do not have a definite time frame for each release. But, would continue the development. Please feel free to contribute.

**DEMO** : 

**Instructions **
****
Download the project. Users should have Node and MongoDB installed. 
1. Start the Mongo server first. Command prompt -> mongod
2. Open command prompt and type in the following commands.
     > npm install 
     >node app.js 

Voila. UI libraries are included in the package. User needs to download only the Node dependencies.

This release contains the basic functionalities and the foundation for the proposed features.

**Credits**
****
Website Template : [tui2tone](https://github.com/tui2tone/flat-admin-bootstrap-templates)
Angular Datatables : [Louis Lin](https://github.com/l-lin/angular-datatables)




