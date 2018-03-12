function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `\nRating: ${rating}\n`;
            if (this.comments.length > 0) {
                result += `Comments:\n`;
                for (let comment of this.comments) {
                    result += ` * ${comment}\n`;
                }
            }
            return result.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let posts = solve();
let post = new posts.Post("JavaScript", "JavaScript is the best!");
console.log(post.toString());

let socialMediaPost = new posts.SocialMediaPost("PHP", "PHP is amazing!", 25, 30);
socialMediaPost.addComment("Good post");
socialMediaPost.addComment("Very good post");
socialMediaPost.addComment("Wow!");
console.log(socialMediaPost.toString());

let blogPost = new posts.BlogPost('C#', 'C Sharp is the best!', 0);
blogPost.view().view().view();
console.log(blogPost.toString());
