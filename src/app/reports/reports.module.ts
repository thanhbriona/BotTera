import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportStatisticsComponent } from './report-statistics/report-statistics.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'report-statistic', component: ReportStatisticsComponent },
];

@NgModule({
  declarations: [ReportStatisticsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportsModule {}
