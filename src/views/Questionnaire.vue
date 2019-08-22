<template>
  <div class="question-naire">
    <h1>投放问卷数据</h1>
    <ScreenQuestion/>
    <QuestionList/>
  </div>

</template>

<script>
import QuestionList from '../components/Questionnaire/QuestionList'
import ScreenQuestion from '../components/Questionnaire/ScreenQuestion'
export default {
  components:{
    QuestionList,
    ScreenQuestion
  }
}
</script>

<style lang="scss">
@import "../assets/css/Questionnaire.scss";
</style>
s
