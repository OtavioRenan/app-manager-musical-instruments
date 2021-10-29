import { MessageSystemService } from 'src/app/services/message-system/message-system.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit
{
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  private dataSource: any[] = [
    { id: '1', name: 'Slug 1', slug: 'slug-1' },
    { id: '2', name: 'Slug 2', slug: 'slug-2' },
    { id: '3', name: 'Slug 3', slug: 'slug-3' },
    { id: '4', name: 'Slug 4', slug: 'slug-4' },
    { id: '5', name: 'Slug 5', slug: 'slug-5' },
    { id: '6', name: 'Slug 6', slug: 'slug-6' },
    { id: '7', name: 'Slug 7', slug: 'slug-7' },
    { id: '8', name: 'Slug 8', slug: 'slug-8' },
    { id: '9', name: 'Slug 9', slug: 'slug-9' },
    { id: '10', name: 'Slug 10', slug: 'slug-10' },
    { id: '11', name: 'Slug 11', slug: 'slug-11' },
    { id: '12', name: 'Slug 12', slug: 'slug-12' },
    { id: '13', name: 'Slug 13', slug: 'slug-13' },
    { id: '14', name: 'Slug 14', slug: 'slug-14' },
    { id: '15', name: 'Slug 15', slug: 'slug-15' },
    { id: '16', name: 'Slug 16', slug: 'slug-16' },
    { id: '17', name: 'Slug 17', slug: 'slug-17' },
    { id: '18', name: 'Slug 18', slug: 'slug-18' },
    { id: '19', name: 'Slug 19', slug: 'slug-19' },
    { id: '20', name: 'Slug 20', slug: 'slug-20' },
  ];

  displayedColumns: string[] = ['id', 'name', 'slug', 'edit', 'delete'];
  public listUsers = new MatTableDataSource(this.dataSource);

  ngOnInit(): void
  {
    this.listUsers.paginator = this.paginator;
    //this.getListsUser();
  }

  constructor(
    private userService: UserService,
    private messageSystemService: MessageSystemService,
  ){}

  async getListsUser()
  {
    await this.userService.all().subscribe(
      (users) => {
        //this.listUsers = users;
      },
      (e) => {
        this.messageSystemService.error(e);
      }
    );
  }

  applyFilter(filterValue: any)
  {
    const filter = filterValue.target.value;
    this.listUsers.filter = filter.trim().toLowerCase();
  }
}