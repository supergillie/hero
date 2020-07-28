    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { MovieComponent } from '../movie/movie.component'
    import { MovieTreeoflifeComponent } from '../movie-treeoflife/movie-treeoflife.component'
    import { WordnikComponent } from '../wordnik/wordnik.component'


    const routes: Routes = [
        {
            path: 'movie',
            component: MovieComponent,
        },
        {
            path: 'movie-treeoflife',
            component: MovieTreeoflifeComponent,
        },
        {
            path: 'wordnik',
            component: WordnikComponent,
        }

    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes, {useHash: true})
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
