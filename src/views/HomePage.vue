<template>
    <Header/>

    <About/>

    <ProjectListPage/>

    <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import ProjectListPage from "../components/ProjectList.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "HomePage",
    components: {Header, About, ProjectListPage, Footer}
}
</script>
