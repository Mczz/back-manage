<template>

    <div class="dis-channel">
        <!-- 筛选控制 -->
        <ChannelControl/>
        <!-- 数据列表 -->
        <ChannelList/>

    </div>
</template>

<script>

import ChannelControl from "../components/DistributionChannel/ChannelControl";
import ChannelList from "../components/DistributionChannel/ChannelList";
export default {
    components:{
        ChannelList,
        ChannelControl
    }
}
</script>
<style lang="sass">
    @import "../assets/css/DistributionChannel.scss";
</style>    