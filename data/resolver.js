import { Author, View } from './connectors';
import { getAllTask } from './service/Task';

const resolvers = {
  Query: {
    author(_, args) {
      const author = Author.find({ where: args })
      console.log(" GET Author")
      console.log(author)
      return author;
    },
    allAuthors(_, args) {
      const authors = Author.findAll();
      console.log(JSON.stringify(authors))
      return Author.findAll();
    },
    allTasks(_, args) {
      const tasks = getAllTask();
      console.log(" Fetch tasks")
      return tasks;
    }
  },
    Author: {
      posts(author) {
        return author.getPosts();
      }
    },
    Post: {
      author(post) {
        return post.getAuthor();
      },
      views(post) {
        return View.findOne({ postId: post.id }).then(view => view.views);
      }
    }
};

export default resolvers;
