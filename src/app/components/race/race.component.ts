import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RankingRace } from 'src/app/models/ranking-race.model';

@Component({
  selector: 'devaway-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  columns = ['position', 'name', 'team', 'age', 'time'];
  @Input() set race(source: RankingRace[]) {
    this.dataSource.data = source;
  }
  @Input() raceName = '';

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null;
  public dataSource = new MatTableDataSource<RankingRace>([]);

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }

}
