<template>
  <div>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <h1>{{ articles[0].title }}</h1>
            <p>{{ articles[0].text }}</p>
            <p> {{ articles[0].date}}</p>
            <p> Auteur :{{ articles[0].author}}</p>
            <hr>
            <h2> {{ articles[1].title }} </h2>
            <p>{{ articles[1].text }}</p>
            <p> {{ articles[1].date}}</p>
            <p> Auteur : {{ articles[1].author}}</p>



            
          </div>
        </div>
      </div>
    </article>
    <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">
              Copyright &copy; Your Website 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

// var names = ['Matt Maribojoc', 'Lebron James', 'Bill Gates', 'Childish Gambino'] // used to generate posts for this tutorial

// const getPosts = (number) => {
// 	// generate a number of posts
// 	// in a real setting, this would be a database call or algorithm

// 	let ret = []

// 	for (var i = 0; i < number; i++) {
// 		ret.push({
// 			author: names[i % names.length],
// 			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
// 		})
// 	}	

// 	return ret
// }

// export default getPosts


export default {
  name: "articles",
  data() {
    return {
      articles: [
        {
          title: " What is Lorem Ipsum? ",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
          author: " Inconnu",
          date: " 10/10/2021",
        },
       {
          title: "Why do we use it? ",
          text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "Lara",
          date: " 11/10/2021",
      },],
    };
  },
};
</script>

<style>
</style>