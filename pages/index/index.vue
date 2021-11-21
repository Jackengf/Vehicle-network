<template>
	<view class="content">
		<!-- 顶部白块部分 -->
		<u-row class="topBar"></u-row>	
		<view class="indexBg"></view>
		<view class="topTools u-flex u-row-between-i u-p-l-30 u-p-r-30 u-m-t-50">
			<view class="">
				<u-icon name="mic" size="40"></u-icon>
			</view>
			
			<view>
				<u-picker mode="selector" v-model="show" :range="projectArray" @confirm="confirm"></u-picker>
				<view class="projectName u-m-b-10 u-font-34 u-text-center-i" @click="changeStatus">{{ projectArray[projectCurrent] }}<u-icon name="arrow-down-fill" size="25"></u-icon></view>
			</view>
			<view class="">
				<u-icon name="chat-fill" size="40"></u-icon>
			</view>		
		</view>
		<u-row class="topBg u-col-top-important u-p-t-30">
			
			
			<!-- 项目最新消息情况 -->
			<!-- <u-col span="12" class="u-p-l-20">
				<u-row class="notice u-p-l-30">
					<u-col span="2" class=" u-flex u-row-center-important"><u-image width="88" height="88" src="../../static/index/message.png"></u-image></u-col>
					<u-col span="10">
						<swiper class="swiper" autoplay="true" :display-multiple-items="3" :vertical="true" :interval="3000" :circular="true" :duration="500">
							<swiper-item v-for="(item, index) in messageArray" :key="index">
								<view class="u-m-t-10 u-font-26">{{ item }}</view>
							</swiper-item>
						</swiper>
					</u-col>
				</u-row>
			</u-col> -->
		</u-row>
		
		<view class="infoU u-p-l-30 u-p-r-30 u-flex u-row-between-i">
			<view>
				<view class="infoTi">已行驶公里数</view>
				<view><text class="infoSz">14856</text>km</view>
			</view>
			<view>
				<view class="infoTi">今天</view>
				<view><text class="infoSz">14</text>km</view>
			</view>
			<view>
				<view class="infoTi">总驾驶时间</view>
				<view><text class="infoSz">2:30:18</text>h</view>
			</view>
		</view>
		
		<view class="u-m-30 u-m-30 u-m-30 dingwei"></view>
		
		<!-- 设备预警 -->
		<u-row class="u-m-b-10">
			<!-- 标题 -->
			<u-col span="12" class="u-p-t-20 u-p-b-20 u-p-l-30 u-font-30">
				<u-row>
					<u-col span="6"><text class="indexTitle">设备预警</text></u-col>
					<u-col span="6" class="u-text-right-important"><u-icon class="icon iconfont icon-youjiantou"></u-icon></u-col>
				</u-row>
			</u-col>
			<!-- 内容 -->
			<u-col span="12">
				<u-row>
					<u-col class="u-text-center-important" span="4" v-for="(item, index) in warningArray" :key="index">
						<view class="warningItem u-p-b-20">
							<view class="u-flex u-row-center u-p-t-30 u-p-b-30"><u-image width="88rpx" height="88rpx" :src="item.image"></u-image></view>
							<view class="warningName u-font-22 u-m-b-20">{{ item.name }}</view>
							<view class="warningType u-m-b-20">
								<u-icon class="icon iconfont icon-xianshi_jinggaotianchong"></u-icon>
								<text>{{ item.type }}</text>
							</view>
						</view>
					</u-col>
				</u-row>
			</u-col>
		</u-row>
		<!-- 考勤 -->
		<!-- <u-row class="u-m-b-10">
			<u-col span="12" class="u-p-t-20 u-p-b-20 u-p-l-30 u-font-30">
				<u-row @click="jumpAttendance">
					<u-col span="6"><text class="indexTitle">考勤</text></u-col>
					<u-col span="6" class="u-text-right-important"><u-icon class="icon iconfont icon-youjiantou"></u-icon></u-col>
				</u-row>
			</u-col>
			<u-col span="12">
				<view class="u-p-l-10 u-p-r-10"><itemCard :isShowRadius="true" :isShowShadow="true" :cardArr="cardArr"></itemCard></view>
			</u-col>
		</u-row> -->
		<!-- 公告 -->
		<u-row class="u-p-b-20">
			<u-col span="12" class="u-p-t-20 u-p-b-20 u-p-l-30 u-font-30">
				<u-row>
					<u-col span="6"><text class="indexTitle">统计分析</text></u-col>
					<u-col span="6" class="u-text-right-important"><u-icon class="icon iconfont icon-youjiantou"></u-icon></u-col>
				</u-row>
			</u-col>
			<u-col span="12" class="u-p-l-20 u-p-r-20">
				<u-row class="afficheBox">
					<u-col span="2" class="u-p-l-20 u-flex u-row-center-important"><u-image width="88rpx" height="88rpx" src="../../static/index/affiche.png"></u-image></u-col>
					<u-col span="10">
						<view v-for="(item, index) in afficheArray" :key="'info-' + index">
							<u-cell-group :border="false">
								<u-cell-item title-width="10rpx" hover-class="none" :arrow="false" :border-top="false" :title="item.name" :value="item.time"></u-cell-item>
							</u-cell-group>
						</view>
					</u-col>
				</u-row>
			</u-col>
		</u-row>
	</view>
</template>

<script>
import itemCard from '../../common/components/itemCard/itemCard.vue';
export default {
	components: {
		itemCard
	},
	data() {
		return {
			show: false,
			projectArray: ['苏B000000', '苏B222222', '苏B888888'], //项目地点
			projectName: '苏B000000',
			projectCurrent: 0, //当前项目
			cardArr: [{ num: 500, name: '总人数', color: '#F7A831' }, { num: 350, name: '打卡人数', color: '#F75676' }, { num: 10, name: '迟到', color: '#3CC9E2' }],
			messageArray: [
				'【最新】丘地块项目总概算的咨询评审报告',
				'【最新】初步设计及概算的批复',
				'【最新】工程开工令-主体结构',
				'【最新】丘地块项目总概算的咨询评审报告3333',
				'【最新】丘地块项目总概算的咨询评审报告444'
			],
			warningArray: [
				{ image: '../../static/index/td.png', name: '水箱', type: '剩余：22t' },
				{ image: '../../static/index/sjj.png', name: '电源', type: '剩余：100a' },
				{ image: '../../static/index/Car.png', name: '油箱', type: '剩余：23 t' }
			],
			afficheArray: [
				{ name: '丘地块项目采购公告一', time: '2020/10/23' },
				{ name: '丘地块项目采购公告二', time: '2020/10/23' },
				{ name: '丘地块项目采购公告三', time: '2020/10/23' }
			]
		};
	},
	onLoad() {},
	methods: {
		// 跳转考勤页面
		jumpAttendance() {
			uni.navigateTo({
				url: '../attendance/attendance'
			});
		},
		//切换项目
		changeProject(e) {
			this.projectCurrent = e.target.value;
			this.projectName = this.projectArray[e.target.value];
		},
		changeStatus() {
			this.show = !this.show;
		},
		confirm(e) {
			this.projectCurrent = e[0];
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	.indexBg{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		background: rgb(17,24,42);
	}
	.infoU{
		color: #fff;
		.infoTi{
			color: rgb(91,93,114);
		}
		.infoSz{
			font-size: 25px;
		}
	}
	
	.dingwei{
		background: url(../../static/index/dingwei.png) no-repeat;
		background-size: 100% 100%;
		height: 100px;
	}
	
	.temperature {
		& text:first-child {
			font-size: 60rpx;
			font-family: DIN Alternate;
			font-weight: bold;
		}
		.icon-qing {
			font-size: 48rpx;
			color: #fff;
		}
	}
	.topTools{
		height: 40px;
		color: #fff;
	}
	.topBg {
		background-image: url(../../static/index/bg01.png);
		background-size: 100%;
		background-repeat: no-repeat;
		height: 480rpx;
		color: #fff;
	}
	.notice {
		background: #f8f8f8;
		background-color: rgba(248, 248, 248, 0.7);
		border-radius: 20px;
		.swiper {
			height: 160rpx;
			view {
				font-family: PingFang SC;
				font-weight: 400;
				color: #010000;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
	.indexTitle {
		color: rgb(91,93,114);
	}
	.icon-youjiantou {
		color: #3096fa;
		font-size: 30rpx;
	}
	.warningItem {
		border-radius: 10px;
		box-shadow: 0px 1rpx 20rpx 0px rgba(0, 0, 0, 0.1);
		.warningName {
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFDEF;
		}
		.warningType {
			color: red;
			font-size: 22rpx;
		}
	}
	.afficheBox {
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	/deep/ {
		.u-cell {
			padding: 10rpx 20rpx 0 0rpx;
			background: rgb(17,24,42) !important;
			color: #FFFFFF !important;
			border: 0 !important;
			&::after{
				border: 0 !important;
			}
			.u-cell_title {
				display: inline-block;
				width: 60vw;
				font-size: 26rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.u-cell__value {
				font-size: 22rpx;
			}
		}
	}
}
</style>
