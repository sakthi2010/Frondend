import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
//   openProjectDetailsDialog(data){
//     let dialogRef = this.dialog.open(ProjectDetailsPopupComponent, {
//         data: data,
//         width : "100%"
//     });
//     dialogRef.afterClosed().subscribe(data => {
//         // if(user){
//         //     (user.id) ? this.updateUser(user) : this.addUser(user);
//         // }
//     });
//     // this.showSearch = false;
// }

  ngOnInit(): void {
  }

}
