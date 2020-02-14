import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable()
export class PostsService {
    errorSubject = new Subject<string>();

    constructor(private http: HttpClient) { }


    url = 'https://angular-learning-908f0.firebaseio.com/';
    postURL = this.url + 'posts.json';

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };
        this.http.post<{ name: string }>(this.postURL, postData, {
            observe: 'response',
        }).subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.errorSubject.next(error.message);
        });
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        return this.http.get<{ [key: string]: Post }>(this.postURL, {
            headers: new HttpHeaders({'Custom-Header': 'Hello'}),
            params: searchParams,
            responseType: 'json'
        })
            .pipe(map((responseData) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }
                return postsArray;
            }),
                catchError(errorResponse => {
                    return throwError(errorResponse);
                })
            );
    }

    deletePosts() {
        return this.http.delete(this.postURL, {
            observe: 'events',
            responseType: 'text'
        }).pipe(tap(event => {
            console.log('tap event: ', event);
            if (event.type === HttpEventType.Sent) {
                console.log('event sent: ', event.type);
            }
            if (event.type === HttpEventType.Response) {
                console.log('event body response: ', event.body);
            }
        }));
    }
}