export interface Posts {
    data:string;
    children:Post[];
} 
export interface Post {
    data:{
    title:string;
    thumbnail:string;
    url:string;
    }
}
