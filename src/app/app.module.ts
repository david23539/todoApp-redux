import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { AddComponent } from './todo/add/add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoReducer } from './todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './app.reducer';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    AddComponent,
    TodoFooterComponent,
    FilterPipe
  ],
  imports: [
        BrowserModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production, // Restrict extension to log-only mode
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
