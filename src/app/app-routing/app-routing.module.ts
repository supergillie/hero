    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { MovieComponent } from '../movie/movie.component'
    import { WordnikComponent } from '../wordnik/wordnik.component'

    const routes: Routes = [
        {
            path: 'movie',
            component: MovieComponent,
        },
        {
            path: 'wordnik',
            component: WordnikComponent,
        }

    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
