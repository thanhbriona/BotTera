import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  createUser() {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      width: '70%',
      data: {
        mode: 'create',
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }

  updateUser() {
    const dialogRef = this.dialog.open(DialogUserComponent, {
      width: '70%',
      data: {
        mode: 'update',
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
}
