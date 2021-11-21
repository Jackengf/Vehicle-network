<template>
	<view class="content">
		<u-row class="wrap" v-for="(item,index) in mobileAppMenusData" :key="index" >
			<u-col span='12'>
				<u-row class='navTitle u-font-30 u-p-l-30 u-p-r-30' v-if="item.IsShow">{{item.DisplayName}}</u-row>
			</u-col>
			<u-col span='12'>
				<u-row class="u-flex u-col-top u-col-top-important u-row-left u-flex-wrap u-m-l-40 u-m-r-20">
					<u-col span="3" class="u-flex u-row-center-important u-m-b-40" v-for="(val,idx) in item.VisibleSubMenus" :key="idx" v-if="val.IsShow">
						<view class="" @click="redirectToPage(val.Name)">
							<view class="u-margin-auto u-block imgBox" style="">
								<u-image class="u-margin-auto u-block" width="88rpx"height='88rpx' :src="'../../static/work/'+val.Name+'.png'" mode=""></u-image>
							</view>
							<text class="txt u-margin-auto u-font-26 u-inline-block u-text-center u-break-word">{{val.DisplayName}}</text>
						</view>
					</u-col>
				</u-row>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		components: {
		},
		onLoad(option) {
			
		},
		onNavigationBarButtonTap(e){
			const index=e.index;
			console.log(index)
			if(index==0){
				uni.navigateTo({
					url:'platformconfig'
				})
			}
		},
		data() {
			return {
				mobileAppMenusData: [
					{
						"ID": 86,
						"Name": "Service",
						"WebClass": "laowuguanli",
						"LinkHerf": "",
						"ParentId": null,
						"Sort": 2,
						"RequireProject": true,
						"VisibleSubMenus": [
							{
								"ID": 87,
								"Name": "Attendance",
								"WebClass": "",
								"LinkHerf": "/LaborManage/Index",
								"ParentId": 86,
								"Sort": 1,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "考勤管理",
								"Type": null
							},
							{
								"ID": 88,
								"Name": "Leave",
								"WebClass": "",
								"LinkHerf": "/LaborManage/Left",
								"ParentId": 86,
								"Sort": 2,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "请假管理",
								"Type": null
							},
							{
								"ID": 89,
								"Name": "SheWolf",
								"WebClass": "",
								"LinkHerf": "/LaborManage/RealName",
								"ParentId": 86,
								"Sort": 3,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "人员实名制",
								"Type": null
							}
						],
						"Module": "",
						"Location": null,
						"IsShow": true,
						"DisplayName": "劳务管理",
						"Type": null
					},
					{
						"ID": 96,
						"Name": "Equipment",
						"WebClass": "shebeiguanli",
						"LinkHerf": "",
						"ParentId": null,
						"Sort": 3,
						"RequireProject": true,
						"VisibleSubMenus": [
							{
								"ID": 99,
								"Name": "Video",
								"WebClass": "",
								"LinkHerf": "/Equipment/Video",
								"ParentId": 96,
								"Sort": 1,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "视频监控",
								"Type": null
							},
							{
								"ID": 98,
								"Name": "Environment",
								"WebClass": "",
								"LinkHerf": "/Equipment/Environment",
								"ParentId": 96,
								"Sort": 2,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "环境检测",
								"Type": null
							},
							{
								"ID": 101,
								"Name": "Car",
								"WebClass": "",
								"LinkHerf": "/Equipment/Car",
								"ParentId": 96,
								"Sort": 3,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "车辆监控",
								"Type": null
							},
							{
								"ID": 97,
								"Name": "TowerCrane",
								"WebClass": "",
								"LinkHerf": "/Equipment/TowerCrane",
								"ParentId": 96,
								"Sort": 4,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "塔吊监控",
								"Type": null
							},
							{
								"ID": 104,
								"Name": "Loadometer",
								"WebClass": "",
								"LinkHerf": "/Equipment/Weighbridge",
								"ParentId": 96,
								"Sort": 5,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "地磅检测",
								"Type": null
							},
							{
								"ID": 100,
								"Name": "Elevator",
								"WebClass": "",
								"LinkHerf": "/Equipment/Elevator",
								"ParentId": 96,
								"Sort": 6,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "升降机监控",
								"Type": null
							},
							{
								"ID": 102,
								"Name": "HighModulus",
								"WebClass": "",
								"LinkHerf": "/Equipment/HighModulus",
								"ParentId": 96,
								"Sort": 7,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "高支模检测",
								"Type": null
							},
							{
								"ID": 103,
								"Name": "DeepExcavation",
								"WebClass": "",
								"LinkHerf": "/Equipment/DeepExcavation",
								"ParentId": 96,
								"Sort": 8,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "深基坑检测",
								"Type": null
							}
						],
						"Module": "",
						"Location": null,
						"IsShow": true,
						"DisplayName": "设备管理",
						"Type": null
					},
					{
						"ID": 90,
						"Name": "Order",
						"WebClass": "gongziguanli",
						"LinkHerf": "",
						"ParentId": null,
						"Sort": 4,
						"RequireProject": true,
						"VisibleSubMenus": [
							{
								"ID": 93,
								"Name": "SupervisorLog",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/SupervisionLog",
								"ParentId": 90,
								"Sort": 1,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "工程监理报告",
								"Type": null
							},
							{
								"ID": 133,
								"Name": "Materials",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/Materials",
								"ParentId": 90,
								"Sort": 2,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": false,
								"DisplayName": "建材质量管理",
								"Type": null
							},
							{
								"ID": 91,
								"Name": "SafetyManagement",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/HSE",
								"ParentId": 90,
								"Sort": 3,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "工程安全问题",
								"Type": null
							},
							{
								"ID": 92,
								"Name": "QualityManagement",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/Quality",
								"ParentId": 90,
								"Sort": 4,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "工程质量问题",
								"Type": null
							},
							{
								"ID": 134,
								"Name": "QualityDetection",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/QualityDetection",
								"ParentId": 90,
								"Sort": 5,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": false,
								"DisplayName": "工程质量检测管理",
								"Type": null
							},
							{
								"ID": 135,
								"Name": "QualityCheck",
								"WebClass": "",
								"LinkHerf": "/ConstructionSupervision/QualityCheck",
								"ParentId": 90,
								"Sort": 6,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": false,
								"DisplayName": "工程质量验收管理",
								"Type": null
							}
						],
						"Module": "",
						"Location": null,
						"IsShow": true,
						"DisplayName": "工单管理",
						"Type": null
					},
					{
						"ID": 94,
						"Name": "ProductiveForces",
						"WebClass": "shengchanliguanli",
						"LinkHerf": "",
						"ParentId": null,
						"Sort": 5,
						"RequireProject": true,
						"VisibleSubMenus": [
							{
								"ID": 95,
								"Name": "EfficiencyAnalysis",
								"WebClass": "",
								"LinkHerf": "/ProductionManage/EfficiencyAnalysis",
								"ParentId": 94,
								"Sort": 1,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "工效管理",
								"Type": null
							}
						],
						"Module": "",
						"Location": null,
						"IsShow": true,
						"DisplayName": " 生产力管理",
						"Type": null
					},
					{
						"ID": 128,
						"Name": "KnowledgeBase",
						"WebClass": "zhishiku",
						"LinkHerf": "/KnowledgeLibrary/Index",
						"ParentId": null,
						"Sort": 8,
						"RequireProject": true,
						"VisibleSubMenus": [
							{
								"ID": 131,
								"Name": "AddressList",
								"WebClass": "",
								"LinkHerf": "/KnowledgeLibrary/AddressList",
								"ParentId": 128,
								"Sort": 1,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "通讯录",
								"Type": null
							},
							{
								"ID": 129,
								"Name": "QA",
								"WebClass": "",
								"LinkHerf": "/KnowledgeLibrary/QA",
								"ParentId": 128,
								"Sort": 2,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "常见问题",
								"Type": null
							},
							{
								"ID": 130,
								"Name": "regulation",
								"WebClass": "",
								"LinkHerf": "/KnowledgeLibrary/Regulation",
								"ParentId": 128,
								"Sort": 3,
								"RequireProject": true,
								"VisibleSubMenus": [],
								"Module": "",
								"Location": null,
								"IsShow": true,
								"DisplayName": "管理办法",
								"Type": null
							}
						],
						"Module": "",
						"Location": null,
						"IsShow": true,
						"DisplayName": "知识库",
						"Type": null
					}
				]
			}
		},
		methods: {
			//跳转页面点击
			redirectToPage(subName){
				console.log(subName)
				switch(subName){
					case 'Attendance'://考勤
						this.navigateByName('../attendance/attendance');
						break;
					case 'SafetyManagement'://安全
						this.navigateByName('../issueSafety/issueSafetyCharts');
						break;
					case 'QualityManagement'://质量
						this.navigateByName('../issueQuality/issueQualityCharts');
						break;
					case 'SheWolf'://实名制
						this.navigateByName('../realName/realName');
						break;
					case 'Leave'://请假
						this.navigateByName('../absence/absence');
						break;
					case 'EfficiencyAnalysis'://功效分析
						this.navigateByName('../efficacyAnalysis/efficacyAnalysis');
						break;
					case 'SupervisorLog':
						this.navigateByName('../log/log');
						break;
					case 'QA':
						this.navigateByName('../commonIssue/commonIssue');
						break;
					default:
						break;
				}
			},
			//跳转方法
			navigateByName(url){
				uni.navigateTo({
					url:url
				})
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		font-weight: 400;
		.navTitle{
			line-height: 90rpx;
			color: #222222;
		}
		.imgBox{
			border-radius:36rpx;
			overflow: hidden; 
			width: 88rpx;
			height: 88rpx;
		}
		
	}

</style>
