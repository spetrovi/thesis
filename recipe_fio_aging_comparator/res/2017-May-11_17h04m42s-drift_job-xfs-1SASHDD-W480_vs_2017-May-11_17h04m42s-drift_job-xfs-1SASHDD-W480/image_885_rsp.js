var image_885_rsp;
$(document).ready(function () {image_885_rsp= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'image_885_rsp'},
title: {text: 'Evolution of latency'},xAxis: [{categories: [3, 21, 39, 57, 75, 93, 111, 129, 147, 165, 183, 201, 219, 237, 255, 273, 292, 310, 328, 346, 364, 382, 400, 418, 436, 454, 472, 490, 508, 526, 544, 562, 580, 598, 616, 634, 652, 670, 688, 706, 724, 742, 760, 778, 796, 814, 832, 850, 868, 886, 904, 922, 940, 958, 976, 994, 1012, 1030, 1048, 1066, 1084, 1102, 1120, 1138, 1156, 1174, 1192, 1210, 1228, 1246, 1264, 1282, 1300, 1318, 1336, 1354, 1372, 1390, 1408, 1426, 1444, 1462, 1480, 1498, 1516, 1534, 1553, 1571, 1589, 1607, 1625, 1643, 1661, 1679, 1697, 1715, 1733, 1751, 1769, 1787, 1805, 1823, 1841, 1859, 1877, 1895, 1913, 1931, 1949, 1967, 1985, 2003, 2021, 2039, 2057, 2075, 2093, 2111, 2129, 2147, 2165, 2183, 2201, 2219, 2237, 2255, 2273, 2291, 2309, 2327, 2345, 2363, 2381, 2399, 2417, 2435, 2453, 2471, 2489, 2507, 2525, 2543, 2561, 2579, 2597, 2615, 2633, 2651, 2669, 2687, 2705, 2723, 2741, 2759, 2777, 2795, 2813, 2832, 2850, 2868, 2886, 2904, 2922, 2940, 2958, 2976, 2994, 3012, 3030, 3048, 3066, 3084, 3102, 3120, 3138, 3156, 3174, 3192, 3210, 3228, 3246, 3264, 3282, 3300, 3318, 3336, 3354, 3372, 3390, 3408, 3426, 3444, 3462, 3480, 3498, 3516, 3534, 3552, 3570, 3588, 3606, 3624, 3642, 3660, 3678, 3696, 3714, 3732, 3750, 3768, 3786, 3804, 3822, 3840, 3858, 3876, 3894, 3912, 3930, 3948, 3966, 3984, 4002, 4020, 4038, 4056, 4074, 4093, 4111, 4129, 4147, 4165, 4183, 4201, 4219, 4237, 4255, 4273, 4291, 4309, 4327, 4345, 4363, 4381, 4399, 4417, 4435, 4453, 4471, 4489, 4507, 4525, 4543, 4561, 4579, 4597, 4615, 4633, 4651, 4669, 4687, 4705, 4723, 4741, 4759, 4777, 4795, 4813, 4831, 4849, 4867, 4885, 4903, 4921, 4939, 4957, 4975, 4993, 5011, 5029, 5047, 5065, 5083, 5101, 5119, 5137, 5155, 5173, 5191, 5209, 5227, 5245, 5263, 5281, 5299, 5317, 5335, 5354, 5372, 5390, 5408, 5426, 5444, 5462, 5480, 5498, 5516, 5534, 5552, 5570, 5588, 5606, 5624, 5642, 5660, 5678, 5696, 5714, 5732, 5750, 5768, 5786, 5804, 5822, 5840, 5858, 5876, 5894, 5912, 5930, 5948, 5966, 5984, 6002, 6020, 6038, 6056, 6074, 6092, 6110, 6128, 6146, 6164, 6182, 6200, 6218, 6236, 6254, 6272, 6290, 6308, 6326, 6344, 6362, 6380, 6398, 6416, 6434, 6452, 6470, 6488, 6506, 6524, 6542, 6560, 6578, 6596, 6614, 6633, 6651, 6669, 6687, 6705, 6723, 6741, 6759, 6777, 6795, 6813, 6831, 6849, 6867, 6885, 6903, 6921, 6939, 6957, 6975, 6993, 7011, 7029, 7047, 7065, 7083, 7101, 7119, 7137, 7155, 7173, 7191, 7209, 7227, 7245, 7263, 7281, 7299, 7317, 7335, 7353, 7371, 7389, 7407, 7425, 7443, 7461, 7479, 7497, 7515, 7533, 7551, 7569, 7587, 7605, 7623, 7641, 7659, 7677, 7695, 7713, 7731, 7749, 7767, 7785, 7803, 7821, 7839, 7857, 7875, 7894, 7912, 7930, 7948, 7966, 7984, 8002, 8020, 8038, 8056, 8074, 8092, 8110, 8128, 8146, 8164, 8182, 8200, 8218, 8236, 8254, 8272, 8290, 8308, 8326, 8344, 8362, 8380, 8398, 8416, 8434, 8452, 8470, 8488, 8506, 8524, 8542, 8560, 8578, 8596, 8614, 8632, 8650, 8668, 8686, 8704, 8722, 8740, 8758, 8776, 8794, 8812, 8830, 8848, 8866, 8884, 8902, 8920, 8938, 8956, 8974, 8992, 9010, 9028, 9046, 9064, 9082, 9100, 9118, 9136, 9154, 9173, 9191, 9209, 9227, 9245, 9263, 9281, 9299, 9317, 9335, 9353, 9371, 9389, 9407, 9425, 9443, 9461, 9479, 9497, 9515, 9533, 9551, 9569, 9587, 9605, 9623, 9641, 9659, 9677, 9695, 9713, 9731, 9749, 9767, 9785, 9803, 9821, 9839, 9857, 9875, 9893, 9911, 9929, 9947, 9965, 9983, 10001, 10019, 10037, 10055, 10073, 10091, 10109, 10127, 10145, 10163, 10181, 10199, 10217, 10235, 10253, 10271, 10289, 10307, 10325, 10343, 10361, 10379, 10397, 10415, 10434, 10452, 10470, 10488, 10506, 10524, 10542, 10560, 10578, 10596, 10614, 10632, 10650, 10668, 10686, 10704, 10722, 10740, 10758, 10776, 10794, 10812, 10830, 10848, 10866, 10884, 10902, 10920, 10938, 10956, 10974, 10992, 11010, 11028, 11046, 11064, 11082, 11100, 11118, 11136, 11154, 11172, 11190, 11208, 11226, 11244, 11262, 11280, 11298, 11316, 11334, 11352, 11370, 11388, 11406, 11424, 11442, 11460, 11478, 11496, 11514, 11532, 11550, 11568, 11586, 11604, 11622, 11640, 11658, 11676, 11695, 11713, 11731, 11749, 11767, 11785, 11803, 11821, 11839, 11857, 11875, 11893, 11911, 11929, 11947, 11965, 11983, 12001, 12019, 12037, 12055, 12073, 12091, 12109, 12127, 12145, 12163, 12181, 12199, 12217, 12235, 12253, 12271, 12289, 12307, 12325, 12343, 12361, 12379, 12397, 12415, 12433, 12451, 12469, 12487, 12505, 12523, 12541, 12559, 12577, 12595, 12613, 12631, 12649, 12667, 12685, 12703, 12721, 12739, 12757, 12775, 12793, 12811, 12829, 12847, 12865, 12883, 12901, 12919, 12937, 12955, 12974, 12992, 13010, 13028, 13046, 13064, 13082, 13100, 13118, 13136, 13154, 13172, 13190, 13208, 13226, 13244, 13262, 13280, 13298, 13316, 13334, 13352, 13370, 13388, 13406, 13424, 13442, 13460, 13478, 13496, 13514, 13532, 13550, 13568, 13586, 13604, 13622, 13640, 13658, 13676, 13694, 13712, 13730, 13748, 13766, 13784, 13802, 13820, 13838, 13856, 13874, 13892, 13910, 13928, 13946, 13964, 13982, 14000, 14018, 14036, 14054, 14072, 14090, 14108, 14126, 14144, 14162, 14180, 14198, 14216, 14235, 14253, 14271, 14289, 14307, 14325, 14343, 14361, 14379, 14397, 14415, 14433, 14451, 14469, 14487, 14505, 14523, 14541, 14559, 14577, 14595, 14613, 14631, 14649, 14667, 14685, 14703, 14721, 14739, 14757, 14775, 14793, 14811, 14829, 14847, 14865, 14883, 14901, 14919, 14937, 14955, 14973, 14991, 15009, 15027, 15045, 15063, 15081, 15099, 15117, 15135, 15153, 15171, 15189, 15207, 15225, 15243, 15261, 15279, 15297, 15315, 15333, 15351, 15369, 15387, 15405, 15423, 15441, 15459, 15477, 15495, 15514, 15532, 15550, 15568, 15586, 15604, 15622, 15640, 15658, 15676, 15694, 15712, 15730, 15748, 15766, 15784, 15802, 15820, 15838, 15856, 15874, 15892, 15910, 15928, 15946, 15964, 15982, 16000, 16018, 16036, 16054, 16072, 16090, 16108, 16126, 16144, 16162, 16180, 16198, 16216, 16234, 16252, 16270, 16288, 16306, 16324, 16342, 16360, 16378, 16396, 16414, 16432, 16450, 16468, 16486, 16504, 16522, 16540, 16558, 16576, 16594, 16612, 16630, 16648, 16666, 16684, 16702, 16720, 16738, 16756, 16775, 16793, 16811, 16829, 16847, 16865, 16883, 16901, 16919, 16937, 16955, 16973, 16991, 17009, 17027, 17045, 17063, 17081, 17099, 17117, 17135, 17153, 17171, 17189, 17207, 17225, 17243, 17261, 17279, 17297, 17315, 17333, 17351, 17369, 17387, 17405, 17423, 17441, 17459, 17477, 17495, 17513, 17531, 17549, 17567, 17585, 17603, 17621, 17639, 17657, 17675, 17693, 17711, 17729, 17747, 17765, 17783, 17801, 17819, 17837, 17855, 17873, 17891, 17909, 17927, 17945, 17963, 17981, 17999],title: {text: 'time'}}],
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0,
            grouping: false,
            shadow: false
        }
    },
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Latency [ms]'}}],
      tooltip: {shared: true},
      series: [

	{name: 'random_write',
	type: 'line',
	data: [11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 28, 28, 28, 28, 28, 28, 27, 27, 26, 25, 25, 24, 24, 23, 22, 21, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 8, 7, 6, 4, 3, 1, 0, -1, -2, -4, -6, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 11, 11, 6, 6, 7, 7, 7, 0, 1, 3, 4, 5, 6, 8, 9, 9, 10, 11, 12, 13, 13, 14, 15, 16, 16, 17, 17, 18, 19, 19, 20, 20, 21, 21, 22, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 27, 27, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 24, 24, 23, 23, 22, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 15, 15, 7, 7, 7, 7, 7, 7, 7, 7, 6, 12, 12, 12, 12, 12, 20, 21, 22, 22, 23, 23, 24, 24, 24, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 28, 28, 28, 29, 29, 29, 29, 29, 28, 28, 28, 28, 28, 28, 28, 27, 27, 26, 26, 25, 24, 23, 23, 23, 22, 22, 21, 21, 20, 20, 21, 20, 19, 19, 18, 18, 17, 16, 16, 15, 14, 13, 12, 12, 11, 10, 3, 3, 2, 2, 1, 8, 8, 8, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 14, 15, 16, 17, 18, 19, 20, 20, 21, 22, 22, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 27, 27, 27, 28, 24, 10, 12, 14, 16, 18, 20, 22, 24, 25, 27, 28, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 42, 43, 43, 44, 44, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 44, 44, 43, 43, 42, 42, 41, 40, 40, 39, 38, 36, 35, 26, 26, 25, 25, 31, 31, 30, 30, 30, 30, 29, 29, 36, 36, 36, 36, 36, 35, 35, 35, 35, 35, 34, 34, 27, 27, 27, 27, 27, 26, 26, 26, 25, 25, 24, 23, 23, 22, 21, 20, 20, 19, 18, 17, 16, 15, 14, 12, 10, 13, 28, 29, 29, 29, 29, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 31, 30, 30, 29, 29, 28, 28, 27, 26, 26, 25, 25, 24, 24, 23, 23, 22, 21, 21, 20, 19, 18, 17, 17, 16, 15, 13, 12, 11, 10, 9, 8, 7, 6, 13, 13, 13, 12, 12, 12, 11, 11, 11, 10, 10, 9, 9, 8, 8, 7, 6, 6, 5, 4, 4, 3, 3, 2, 9, 9, 8, 9, 8, 8, 8, 8, 8, 8, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 7, 11, 11, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 9, 9, 10, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 14, 14, 14, 13, 13, 14, 13, 13, 15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 13, 13, 13, 13, 13, 12, 12, 12, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 8, 14, 14, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 18, 18, 18, 19, 19, 19, 18, 18, 18, 19, 19, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 16, 16, 15, 15, 14, 14, 14, 13, 13, 12, 11, 11, 10, 10, 9, 8, 8, 7, 6, 6, 5, -4, -3, -3, -2, -2, -1, -1, -1, 5, 6, 7, 8, 8, 9, 9, 7, 8, 9, 10, 11, 12, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 26, 27, 27, 28, 28, 28, 28, 28, 29, 29, 29, 29, 28, 28, 29, 29, 29, 29, 28, 28, 28, 28, 27, 27, 26, 26, 26, 25, 25, 25, 24, 23, 23, 22, 21, 21, 20, 20, 18, 17, 16, 16, 15, 14, 13, 12, 11, 10, 9, 8, 6, 4, 3, 3, 2, 1, 0, 0, -1, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 5, 5, 5, 5, 8, 8, 9, 9, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },
	{name: 'truncate',
	type: 'line',
	data: [12, 11, 11, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, -2, 0, 0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 12, 13, 14, 14, 15, 16, 16, 17, 18, 19, 19, 20, 19, 20, 20, 21, 21, 22, 22, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 27, 27, 27, 27, 27, 27, 27, 27, 27, 26, 26, 26, 26, 25, 25, 24, 24, 24, 23, 23, 22, 21, 21, 20, 19, 18, 18, 17, 16, 15, 14, 13, 12, 16, 15, 14, 13, 13, 12, 11, 10, 9, 8, 8, 7, 6, 5, 4, 3, 1, 0, 0, -1, -2, -3, -5, -6, -7, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -3, -2, -1, -1, -1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 0, 1, 2, 3, 5, 6, 6, 7, 8, 9, 10, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 21, 22, 23, 23, 24, 25, 25, 25, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 26, 26, 26, 25, 25, 24, 24, 23, 23, 22, 22, 21, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 13, 12, 12, 13, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 3, 2, 1, 1, 0, 0, -1, -2, -3, -4, 1, 1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, -4, -3, -2, -1, 0, 0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 7, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 0, 0, 0, 0, -1, -2, -2, -3, -4, -5, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 0, -2, -1, 0, -1, 0, 0, 0, 1, 1, 2, 2, 3, 3, -4, -3, -1, 0, 0, 0, 0, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 21, 22, 23, 23, 24, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 28, 28, 28, 28, 27, 27, 26, 26, 25, 25, 24, 23, 23, 22, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 9, 8, 7, 6, 4, 3, 1, 0, 3, 2, 2, 1, 0, 0, 0, -1, -2, -3, -4, -5, -6, -7, -8, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },
	{name: 'create',
	type: 'line',
	data: [122, 120, 117, 115, 112, 110, 108, 106, 103, 101, 99, 97, 95, 93, 91, 89, 87, 86, 84, 82, 81, 79, 77, 76, 74, 73, 72, 70, 69, 68, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 57, 56, 55, 55, 54, 53, 53, 52, 52, 52, 51, 43, 43, 42, 42, 41, 65, 66, 68, 70, 71, 73, 74, 75, 75, 75, 75, 75, 75, 74, 74, 73, 72, 75, 74, 73, 72, 71, 70, 68, 67, 72, 66, 65, 64, 64, 60, 59, 61, 60, 58, 57, 56, 55, 53, 54, 55, 51, 50, 49, 48, 52, 51, 50, 50, 48, 47, 49, 45, 45, 44, 50, 49, 48, 47, 46, 45, 44, 43, 40, 39, 38, 47, 46, 46, 45, 45, 44, 43, 42, 41, 39, 38, 36, 34, 40, 39, 38, 37, 35, 31, 34, 33, 32, 30, 28, 26, 29, 28, 27, 31, 30, 37, 37, 37, 37, 36, 36, 29, 29, 30, 30, 30, 31, 30, 31, 31, 31, 29, 11, 13, 14, 9, 11, 13, 15, 17, 16, 18, 20, 22, 23, 24, 31, 33, 30, 31, 34, 36, 38, 41, 43, 38, 40, 43, 46, 48, 38, 45, 48, 51, 54, 55, 58, 61, 63, 63, 66, 68, 74, 77, 79, 81, 83, 86, 88, 89, 91, 92, 94, 96, 97, 99, 100, 100, 101, 102, 102, 102, 102, 102, 101, 98, 98, 97, 97, 96, 95, 95, 93, 92, 93, 92, 87, 85, 84, 84, 82, 80, 78, 76, 74, 71, 69, 66, 63, 60, 58, 55, 59, 56, 53, 50, 47, 44, 40, 36, 33, 28, 25, 41, 39, 36, 41, 39, 37, 35, 33, 34, 32, 30, 28, 25, 23, 21, 18, 21, 0, 2, 2, 1, 0, 0, 7, 7, 7, 6, 6, 9, 9, 11, 12, 14, 19, 16, 18, 21, 25, 27, 30, 31, 33, 36, 38, 40, 42, 43, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 55, 56, 57, 50, 51, 52, 51, 53, 55, 56, 48, 49, 51, 51, 53, 55, 56, 61, 63, 65, 66, 68, 69, 70, 71, 72, 73, 73, 74, 74, 74, 75, 72, 73, 71, 72, 71, 67, 68, 68, 68, 64, 65, 65, 63, 64, 63, 62, 62, 61, 60, 59, 46, 45, 45, 44, 43, 42, 41, 40, 38, 57, 35, 38, 40, 32, 35, 37, 34, 37, 39, 34, 48, 53, 43, 48, 50, 55, 64, 68, 38, 46, 54, 61, 68, 68, 74, 81, 87, 93, 99, 104, 109, 114, 119, 123, 126, 130, 133, 133, 136, 138, 140, 133, 144, 147, 150, 157, 160, 161, 163, 176, 178, 180, 183, 185, 186, 188, 189, 189, 185, 186, 186, 186, 185, 179, 178, 178, 177, 170, 169, 167, 166, 167, 164, 164, 161, 158, 159, 156, 153, 147, 147, 143, 139, 136, 131, 127, 122, 117, 111, 105, 99, 106, 100, 95, 88, 82, 75, 69, 61, 54, 46, 62, 56, 50, 54, 46, 41, 40, 35, 29, 29, 24, 19, 22, 19, 18, 14, 10, 7, 40, 40, 39, 38, 37, 44, 43, 43, 42, 42, 41, 40, 34, 33, 32, 32, 31, 31, 30, 32, 32, 31, 30, 38, 38, 38, 38, 34, 34, 34, 34, 33, 17, 18, 19, 20, 21, 22, 22, 22, 27, 28, 28, 28, 28, 27, 28, 30, 25, 30, 33, 36, 38, 32, 35, 38, 42, 44, 47, 50, 53, 58, 61, 58, 61, 63, 66, 68, 63, 66, 69, 72, 74, 76, 78, 80, 81, 83, 84, 86, 87, 85, 86, 87, 87, 88, 88, 91, 91, 91, 91, 90, 93, 92, 92, 98, 98, 98, 98, 97, 97, 96, 95, 94, 93, 91, 90, 88, 87, 78, 77, 76, 73, 77, 76, 75, 73, 71, 69, 67, 65, 63, 60, 57, 55, 52, 49, 46, 46, 39, 36, 33, 30, 44, 42, 41, 38, 36, 34, 32, 30, 27, 24, 21, 20, 17, 23, 21, 19, 23, 26, 24, 23, 21, 30, 29, 28, 27, 26, 25, 24, 23, 22, 20, 25, 24, 20, 3, 4, 13, 15, 16, 18, 20, 21, 22, 23, 25, 26, 27, 28, 29, 33, 34, 25, 27, 29, 31, 33, 34, 36, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46, 47, 47, 48, 48, 49, 48, 49, 49, 48, 54, 55, 55, 56, 56, 53, 53, 54, 54, 55, 54, 54, 54, 54, 54, 54, 54, 54, 53, 53, 56, 56, 53, 53, 53, 50, 50, 50, 50, 51, 50, 50, 49, 48, 48, 44, 44, 39, 39, 39, 39, 38, 38, 37, 37, 18, 19, 20, 21, 21, 21, 21, 22, 22, 22, 21, 20, 24, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 52, 52, 52, 52, 52, 51, 62, 62, 60, 61, 62, 62, 62, 62, 63, 63, 61, 62, 62, 62, 62, 51, 52, 52, 53, 53, 54, 55, 55, 55, 55, 51, 52, 52, 53, 52, 52, 56, 50, 50, 48, 48, 49, 50, 50, 50, 50, 50, 50, 49, 49, 48, 48, 47, 50, 49, 48, 50, 49, 49, 48, 46, 45, 44, 43, 41, 40, 42, 41, 43, 42, 41, 39, 38, 36, 34, 32, 50, 50, 50, 50, 50, 49, 49, 49, 48, 48, 47, 47, 46, 46, 45, 44, 43, 42, 41, 37, 36, 35, 34, 33, 32, 31, 25, 25, 24, 23, 22, 22, 11, 12, 9, 9, 7, 8, 8, 9, 11, 10, 10, 10, 11, 23, 20, 22, 23, 24, 26, 26, 25, 26, 27, 32, 29, 30, 31, 33, 30, 28, 37, 39, 45, 47, 50, 52, 55, 57, 59, 61, 63, 64, 66, 67, 68, 70, 71, 73, 74, 56, 59, 61, 64, 66, 67, 68, 69, 70, 70, 71, 72, 73, 74, 74, 75, 76, 77, 77, 78, 79, 79, 80, 81, 81, 82, 83, 83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 88, 89, 89, 90, 90, 90, 91, 91, 91, 91, 92, 92, 92, 92, 92, 93, 93],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },
	{name: 'append',
	type: 'line',
	data: [29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 34, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 37, 36, 36, 36, 35, 34, 33, 32, 32, 31, 36, 36, 36, 38, 38, 38, 38, 38, 38, 38, 38, 37, 37, 36, 35, 34, 34, 33, 32, 31, 32, 32, 32, 32, 32, 31, 30, 30, 28, 28, 27, 27, 25, 25, 21, 21, 20, 20, 20, 20, 20, 20, 13, 13, 14, 14, 14, 15, 15, 17, 17, 18, 18, 18, 17, 21, 21, 28, 29, 30, 30, 32, 37, 38, 39, 40, 41, 38, 25, 28, 30, 32, 22, 26, 29, 32, 35, 37, 40, 42, 45, 48, 50, 51, 53, 57, 59, 61, 61, 51, 54, 57, 59, 62, 65, 67, 69, 72, 74, 75, 77, 79, 80, 81, 83, 76, 78, 79, 80, 78, 74, 76, 77, 79, 80, 81, 81, 82, 83, 83, 84, 87, 88, 88, 88, 88, 88, 88, 87, 71, 72, 74, 75, 77, 78, 82, 82, 84, 85, 85, 85, 85, 84, 92, 92, 92, 92, 91, 90, 89, 89, 88, 87, 85, 83, 82, 80, 79, 62, 62, 52, 51, 51, 50, 49, 44, 43, 42, 45, 58, 58, 58, 57, 70, 71, 71, 72, 72, 72, 72, 72, 72, 71, 70, 71, 70, 69, 68, 66, 67, 79, 78, 78, 77, 77, 76, 71, 70, 69, 65, 64, 63, 62, 61, 60, 58, 65, 62, 61, 50, 54, 60, 60, 61, 61, 61, 61, 48, 44, 36, 39, 40, 42, 40, 41, 43, 44, 45, 46, 47, 67, 69, 68, 71, 73, 71, 73, 75, 77, 77, 78, 79, 80, 81, 82, 82, 82, 73, 74, 75, 75, 76, 76, 75, 75, 75, 74, 73, 72, 86, 85, 95, 96, 96, 97, 97, 101, 101, 102, 102, 103, 103, 103, 103, 101, 101, 100, 99, 99, 92, 92, 90, 90, 89, 78, 78, 75, 75, 73, 73, 72, 71, 71, 70, 69, 67, 66, 69, 67, 65, 67, 66, 64, 61, 59, 57, 54, 51, 51, 48, 55, 53, 50, 48, 45, 42, 39, 33, 46, 50, 58, 57, 57, 56, 56, 36, 38, 39, 40, 42, 43, 44, 45, 48, 49, 49, 53, 54, 54, 55, 56, 57, 52, 53, 53, 53, 53, 53, 64, 64, 65, 64, 64, 64, 65, 65, 65, 64, 63, 64, 63, 62, 61, 61, 61, 58, 55, 56, 56, 55, 55, 54, 54, 52, 52, 49, 39, 39, 39, 39, 44, 37, 39, 39, 40, 52, 54, 58, 59, 62, 62, 48, 51, 53, 56, 58, 60, 59, 61, 63, 65, 66, 67, 69, 65, 66, 67, 68, 69, 69, 70, 68, 69, 69, 69, 69, 68, 68, 70, 70, 69, 68, 68, 66, 65, 66, 87, 88, 88, 88, 89, 89, 89, 88, 88, 88, 81, 80, 76, 76, 76, 75, 75, 80, 80, 79, 79, 78, 77, 76, 75, 74, 75, 74, 72, 71, 69, 67, 66, 65, 63, 60, 61, 58, 56, 53, 53, 53, 50, 43, 41, 39, 36, 34, 30, 28, 28, 25, 24, 23, 19, 19, 26, 26, 25, 18, 19, 18, 18, 18, 16, 16, 34, 35, 36, 33, 34, 36, 40, 41, 41, 42, 42, 43, 44, 50, 45, 47, 48, 49, 50, 51, 55, 56, 55, 56, 57, 58, 57, 53, 55, 56, 57, 54, 55, 56, 57, 58, 57, 58, 59, 59, 60, 60, 60, 60, 60, 67, 67, 72, 73, 73, 74, 74, 74, 74, 74, 74, 73, 73, 72, 71, 70, 56, 57, 57, 56, 57, 57, 57, 57, 52, 51, 51, 51, 51, 46, 46, 46, 46, 50, 50, 49, 48, 48, 47, 46, 45, 55, 55, 54, 49, 49, 50, 50, 50, 57, 57, 58, 53, 53, 55, 55, 55, 54, 51, 55, 56, 56, 56, 56, 56, 56, 56, 55, 55, 54, 60, 59, 59, 59, 58, 54, 54, 54, 56, 55, 54, 54, 55, 59, 59, 58, 58, 61, 61, 61, 60, 59, 61, 60, 55, 54, 54, 53, 53, 52, 46, 46, 45, 40, 39, 39, 39, 38, 38, 37, 36, 35, 34, 33, 32, 32, 30, 43, 43, 42, 40, 40, 39, 39, 39, 43, 43, 43, 42, 42, 45, 45, 45, 45, 44, 43, 43, 42, 41, 40, 39, 37, 36, 35, 34, 41, 40, 39, 38, 37, 36, 35, 34, 38, 37, 36, 36, 35, 36, 38, 37, 36, 36, 35, 34, 34, 33, 32, 31, 30, 24, 23, 23, 5, 5, 7, 11, 13, 2, 2, 4, 4, 6, 1, 5, 8, 11, 14, 17, 19, 22, 24, 26, 28, 30, 37, 39, 41, 43, 45, 47, 54, 56, 58, 64, 66, 68, 70, 72, 73, 71, 72, 74, 76, 77, 78, 80, 81, 82, 83, 82, 86, 87, 88, 89, 89, 90, 91, 91, 91, 91, 91, 91, 90, 90, 89, 89, 88, 87, 86, 85, 84, 82, 81, 79, 77, 76, 74, 72, 69, 67, 65, 63, 60, 57, 54, 51, 48, 45, 41, 38, 35, 31, 27, 24, 20, 16, 12, 7, 3, 0, 1, -3, -7, 6, 5, 3, 0, -1, 8, 10, 9, 9, 8, 15, 15, 15, 15, 15, 15, 14, 14, 15, 15, 15, 15, 14, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 15, 16, 17, 18, 15, 17, 16, 8, 10, 12, 13, 16, 17, 19, 12, 14, 17, 20, 19, 18, 21, 24, 26, 29, 30, 32, 34, 36, 39, 40, 41, 42, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 70, 71, 72, 73, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 88, 89, 90, 92, 93, 94, 96, 97],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },
	{name: 'delete',
	type: 'line',
	data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, -9, -8, -7, -6, -6, -5, -4, -2, -1, 0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 6, 7, 7, 8, 9, 10, 11, 11, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 18, 18, 18, 17, 17, 17, 16, 16, 15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -2, -2, -2, -3, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, -3, -3, -2, -2, -1, -1, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, -1, -1, -2, -2, -2, -3, -3, -3, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, -2, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, -10, -8, -7, -5, -4, -5, -3, -2, 0, 0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 24, 24, 24, 24, 24, 23, 23, 22, 22, 22, 21, 21, 20, 19, 19, 18, 20, 19, 19, 18, 18, 17, 16, 16, 15, 14, 13, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 0, 0, -1, -2, -4, -5, -6, -8, -9, -11, -12, -14, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },


]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_885_rsp_button').click(function () {image_885_rsp.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
