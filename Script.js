const hexagrams = [
    { name: "☰ Càn - Quẻ Trời", lines: [1,1,1,1,1,1], desc: "Quẻ này tượng trưng cho sức mạnh, sáng tạo và khởi đầu. Đây là thời điểm tốt để bắt đầu những dự án mới, thể hiện bản lĩnh và dẫn dắt. Hãy tự tin vào khả năng của mình, nhưng cũng cần khiêm tốn và không kiêu ngạo." },
    { name: "☷ Khôn - Quẻ Đất", lines: [0,0,0,0,0,0], desc: "Quẻ Khôn biểu thị sự nhẫn nại, tiếp nhận và nuôi dưỡng. Đây là lúc nên lắng nghe, học hỏi và hợp tác với người khác. Thành công sẽ đến từ sự khiêm nhường và kiên trì, không nên vội vàng mà hãy để mọi việc phát triển tự nhiên." },
    { name: "☳ Chấn - Quẻ Sấm", lines: [1,0,0,1,0,0], desc: "Quẻ này báo hiệu sự thức tỉnh, chuyển động và cơ hội mới. Có thể có những thay đổi đột ngột, nhưng đừng sợ hãi. Hãy nắm bắt cơ hội, dũng cảm hành động và thích nghi với hoàn cảnh mới. Năng lượng tích cực đang đến với bạn." },
    { name: "☵ Khảm - Quẻ Nước", lines: [0,1,0,0,1,0], desc: "Quẻ Khảm tượng trưng cho thử thách và khó khăn, nhưng cũng là cơ hội để học hỏi. Hãy giữ vững niềm tin, kiên trì vượt qua trở ngại. Nước chảy xuống thấp nhưng cuối cùng sẽ tìm được đường đi. Hãy linh hoạt và thông minh trong cách xử lý vấn đề." },
    { name: "☲ Ly - Quẻ Lửa", lines: [1,0,1,1,0,1], desc: "Quẻ này mang đến ánh sáng, sự rõ ràng và thành công. Đây là thời điểm tốt để thể hiện tài năng, tỏa sáng trong công việc và xây dựng uy tín. Tuy nhiên, hãy giữ được sự cân bằng, đừng để ngọn lửa đam mê thiêu cháy bản thân." },
    { name: "☴ Tốn - Quẻ Gió", lines: [1,1,0,1,1,0], desc: "Quẻ Tốn đại diện cho sự du nhập, ảnh hưởng nhẹ nhàng và lan tỏa. Hãy kiên trì theo đuổi mục tiêu một cách khéo léo, không cần vội vàng. Thành công sẽ đến từ sự kiên nhẫn, khả năng thích nghi và giao tiếp khéo léo với mọi người." },
    { name: "☶ Cấn - Quẻ Núi", lines: [0,0,1,0,0,1], desc: "Quẻ này khuyên bạn nên dừng lại, suy ngẫm và tĩnh tâm. Đừng vội vàng hành động mà hãy dành thời gian để nhìn nhận lại tình hình. Sự ổn định, kiên định và biết dừng đúng lúc sẽ mang lại kết quả tốt hơn là sự hấp tấp." },
    { name: "☱ Đoài - Quẻ Hồ", lines: [0,1,1,0,1,1], desc: "Quẻ Đoài mang đến niềm vui, sự giao lưu và thành công trong quan hệ. Đây là lúc để mở rộng kết nối, chia sẻ niềm vui với người khác. Hãy giữ thái độ tích cực, vui vẻ nhưng cũng cần chân thành để tạo được lòng tin." },
    { name: "䷀ Thái - Quẻ Thông Thái", lines: [1,1,1,0,0,0], desc: "Quẻ Thái báo hiệu thời kỳ thịnh vượng, hòa hợp và thuận lợi. Mọi việc đang diễn ra tốt đẹp, quan hệ hài hòa. Đây là thời điểm tốt để phát triển, mở rộng và hợp tác. Tuy nhiên, hãy biết giữ gìn và đừng quá tự mãn." },
    { name: "䷁ Bĩ - Quẻ Bế Tắc", lines: [0,0,0,1,1,1], desc: "Quẻ này cảnh báo về thời kỳ khó khăn, trì trệ. Đừng cố gắng ép buộc mọi việc mà hãy kiên nhẫn chờ đợi thời cơ. Hãy tập trung vào việc tu dưỡng bản thân, giữ gìn sức khỏe và đức hạnh. Sau cơn mưa trời lại sáng." },
    { name: "䷂ Đồng Nhân", lines: [1,0,1,1,1,1], desc: "Quẻ này nhấn mạnh sức mạnh của đoàn kết và hợp tác. Hãy tìm kiếm những người cùng chí hướng, xây dựng mối quan hệ dựa trên lòng tin và mục tiêu chung. Thành công sẽ đến khi bạn biết làm việc nhóm và chia sẻ." },
    { name: "䷃ Đại Hữu", lines: [1,1,1,1,0,1], desc: "Quẻ Đại Hữu báo hiệu sự giàu có, thành đạt và may mắn lớn. Bạn đang có nhiều nguồn lực và cơ hội. Hãy sử dụng chúng một cách khôn ngoan, chia sẻ với người khác và không quên cội nguồn. Thành công kèm theo trách nhiệm." },
    { name: "䷄ Khiêm - Quẻ Khiêm Tốn", lines: [0,0,1,0,0,0], desc: "Quẻ này ca ngợi đức tính khiêm tốn. Dù có thành tích hay tài năng, hãy luôn giữ thái độ khiêm nhường, cầu học hỏi. Sự khiêm tốn sẽ mang lại sự tôn trọng và cơ hội mới. Núi dù cao vẫn ẩn mình dưới đất." },
    { name: "䷅ Dự - Quẻ Vui Vẻ", lines: [0,0,0,0,0,1], desc: "Quẻ Dự mang đến niềm vui, sự hài lòng và chuẩn bị cho tương lai. Đây là thời điểm tốt để lập kế hoạch, chuẩn bị tinh thần cho những dự án mới. Hãy tận hưởng khoảnh khắc hiện tại nhưng cũng nhìn về phía trước." },
    { name: "䷆ Tùy - Quẻ Theo Đuổi", lines: [0,1,1,1,0,0], desc: "Quẻ này khuyên bạn nên linh hoạt, thích nghi với hoàn cảnh. Đôi khi việc theo đuổi người khác hoặc xu hướng mới là cần thiết. Hãy học hỏi từ những người có kinh nghiệm, nhưng vẫn giữ bản sắc riêng của mình." },
    { name: "䷇ Cổ - Quẻ Sửa Chữa", lines: [1,0,0,1,1,0], desc: "Quẻ Cổ báo hiệu cần phải sửa chữa, cải thiện những gì đã hư hỏng. Hãy đối mặt với vấn đề, không né tránh. Đây là cơ hội để chữa lành, học hỏi từ sai lầm và xây dựng lại trên nền tảng vững chắc hơn." },
    { name: "䷈ Lâm - Quẻ Tiếp Cận", lines: [1,1,0,0,0,0], desc: "Quẻ này báo hiệu cơ hội đang đến gần. Hãy chủ động tiếp cận, không ngại thử thách mới. Đây là thời điểm tốt để mở rộng ảnh hưởng, lãnh đạo và dẫn dắt người khác. Hãy tự tin nhưng cũng cẩn thận." },
    { name: "䷉ Quan - Quẻ Quan Sát", lines: [0,0,0,1,1,0], desc: "Quẻ Quan khuyên bạn nên quan sát, học hỏi và suy ngẫm. Đừng vội kết luận mà hãy nhìn nhận toàn cảnh. Trí tuệ đến từ việc hiểu biết sâu sắc. Hãy là người quan sát khôn ngoan trước khi hành động." },
    { name: "䷊ Phệ Hạp", lines: [1,0,0,1,0,1], desc: "Quẻ này nói về việc cần có kỷ luật, quy tắc và công bằng. Hãy thiết lập ranh giới rõ ràng, tuân thủ nguyên tắc. Tuy nhiên, cũng cần linh hoạt và nhân văn trong cách áp dụng. Công lý phải đi đôi với lòng nhân ái." },
    { name: "䷋ Bí - Quẻ Trang Trí", lines: [1,0,1,0,0,1], desc: "Quẻ Bí nhấn mạnh vẻ đẹp bên ngoài và sự hoàn thiện. Đây là lúc để chú ý đến hình thức, cải thiện hình ảnh và tạo ấn tượng tốt. Nhưng đừng quên rằng nội dung vẫn quan trọng hơn hình thức." },
    { name: "䷌ Bác - Quẻ Bóc Lột", lines: [0,0,0,0,0,1], desc: "Quẻ này cảnh báo về sự suy thoái, mất mát. Đây không phải thời điểm tốt để khởi đầu mới. Hãy bảo vệ những gì bạn có, kiên nhẫn chờ đợi và chuẩn bị cho chu kỳ mới. Mọi thứ sẽ được đổi mới sau giai đoạn này." },
    { name: "䷍ Phục - Quẻ Trở Về", lines: [1,0,0,0,0,0], desc: "Quẻ Phục báo hiệu sự khởi đầu mới, năng lượng trở lại. Sau thời kỳ khó khăn, hy vọng đang quay trở lại. Hãy tích cực, bắt đầu lại với tinh thần mới và học hỏi từ quá khứ. Ánh sáng cuối đường hầm đã hiện ra." },
    { name: "䷎ Vô Vọng", lines: [1,0,0,1,1,1], desc: "Quẻ này khuyên bạn nên chân thành, không cầu cạnh điều phi lý. Hãy làm việc với tâm ngay, đừng mong đợi những gì không thuộc về mình. Thành công tự nhiên sẽ đến khi bạn làm đúng việc đúng cách." },
    { name: "䷏ Đại Súc", lines: [1,0,0,0,0,1], desc: "Quẻ Đại Súc nói về việc tích lũy, nuôi dưỡng và phát triển dần. Hãy kiên nhẫn xây dựng nền tảng vững chắc, học hỏi và tích lũy kinh nghiệm. Những nỗ lực nhỏ hàng ngày sẽ mang lại thành công lớn về sau." },
    { name: "䷐ Di - Quẻ Nuôi Dưỡng", lines: [1,0,0,0,0,1], desc: "Quẻ này nhấn mạnh tầm quan trọng của việc chăm sóc bản thân và người khác. Hãy chú ý đến sức khỏe, dinh dưỡng và sự phát triển tinh thần. Nuôi dưỡng đúng cách sẽ mang lại sức mạnh và thành công." },
    { name: "䷑ Đại Quá", lines: [0,1,1,1,1,0], desc: "Quẻ này cảnh báo về sự quá mức, áp lực lớn. Có thể bạn đang gánh quá nhiều hoặc đối mặt với thử thách nặng nề. Hãy tìm cách giảm tải, không cố gồng. Đôi khi việc biết từ bỏ cũng là sự khôn ngoan." },
    { name: "䷒ Khảm (Trùng)", lines: [0,1,0,0,1,0], desc: "Quẻ này nhấn mạnh thử thách kép, khó khăn chồng chất. Nhưng đừng nản lòng, hãy giữ vững bản lĩnh và tiếp tục tiến về phía trước. Kinh nghiệm từ những thử thách này sẽ giúp bạn trở nên mạnh mẽ hơn." },
    { name: "䷓ Ly (Trùng)", lines: [1,0,1,1,0,1], desc: "Quẻ này mang đến ánh sáng kép, sự rõ ràng và sáng suốt. Đây là thời điểm tốt để hiểu biết, học hỏi và lan tỏa giá trị tích cực. Hãy giữ ngọn lửa nhiệt huyết cháy sáng và truyền cảm hứng cho người khác." },
    { name: "䷔ Hàm - Quẻ Cảm Ứng", lines: [0,0,1,1,1,0], desc: "Quẻ Hàm nói về sự thu hút, tình cảm và kết nối. Đây là thời điểm tốt cho các mối quan hệ, hợp tác và tình yêu. Hãy mở lòng, chân thành và cho phép mình cảm nhận. Sự chân thật sẽ tạo nên những kết nối sâu sắc." },
    { name: "䷕ Hằng - Quẻ Bền Lâu", lines: [0,1,1,1,0,0], desc: "Quẻ này ca ngợi sự bền bỉ, kiên định. Thành công đến từ việc kiên trì theo đuổi mục tiêu lâu dài, không thay đổi liên tục. Hãy giữ vững nguyên tắc, duy trì nỗ lực đều đặn. Những gì bền vững sẽ mang lại kết quả tốt." },
    { name: "䷖ Độn - Quẻ Ẩn Dật", lines: [0,0,1,1,1,1], desc: "Quẻ Độn khuyên bạn nên tạm lui, nghỉ ngơi và tránh né xung đột. Đây không phải lúc để đối đầu mà là lúc để tích lũy sức lực. Sự rút lui chiến lược không phải là yếu đuối mà là sự khôn ngoan." },
    { name: "䷗ Đại Tráng", lines: [1,1,1,1,0,0], desc: "Quẻ này báo hiệu sức mạnh lớn, năng lượng mạnh mẽ. Đây là lúc để tiến lên, thể hiện sức mạnh nhưng cũng cần kiểm soát. Sức mạnh lớn cần đi đôi với trách nhiệm lớn. Hãy dùng sức mạnh một cách khôn ngoan." },
    { name: "䷘ Tấn - Quẻ Tiến Lên", lines: [0,0,0,1,0,1], desc: "Quẻ Tấn báo hiệu sự thăng tiến, phát triển thuận lợi. Đây là thời điểm tốt để tiến về phía trước, thể hiện năng lực và đạt được thành tựu. Hãy tự tin nhưng khiêm tốn, tiến bước đều đặn không vội vàng." },
    { name: "䷙ Minh Di", lines: [1,0,1,0,0,0], desc: "Quẻ này nói về thời kỳ tối tăm, cần phải che giấu tài năng. Hãy kiên nhẫn, giữ được ánh sáng bên trong dù bên ngoài khó khăn. Đây là lúc để học hỏi trong im lặng và chờ đợi thời cơ phù hợp." },
    { name: "䷚ Gia Nhân", lines: [1,0,1,0,1,1], desc: "Quẻ này nhấn mạnh tầm quan trọng của gia đình và các mối quan hệ gần gũi. Hãy quan tâm đến những người thân yêu, xây dựng tổ ấm vững chắc. Thành công bắt đầu từ việc làm tốt vai trò trong gia đình." },
    { name: "䷛ Khuê - Quẻ Phản Mục", lines: [1,1,0,1,0,1], desc: "Quẻ này nói về sự chia rẽ, mâu thuẫn. Có thể có những quan điểm khác biệt hoặc xung đột nhỏ. Hãy giữ thái độ hòa nhã, tôn trọng sự khác biệt và tìm điểm chung. Đoàn kết trong đa dạng là giá trị." },
    { name: "䷜ Kiển - Quẻ Gian Nan", lines: [0,0,1,0,1,0], desc: "Quẻ Kiển cảnh báo về những khó khăn, trở ngại trên đường đi. Đừng cố gắng vượt qua một cách bừa bãi. Hãy kiên nhẫn, tìm người giúp đỡ và tiến bước từng chút một. Mọi trở ngại đều có thể vượt qua." },
    { name: "䷝ Giải - Quẻ Giải Thoát", lines: [0,1,0,0,0,1], desc: "Quẻ này báo hiệu sự giải thoát, vấn đề được giải quyết. Những khó khăn đang dần biến mất, căng thẳng được giải tỏa. Hãy nhẹ nhõm nhưng cũng rút kinh nghiệm. Đây là lúc để bắt đầu lại với tâm thế mới." },
    { name: "䷞ Tổn - Quẻ Giảm Bớt", lines: [1,0,0,0,1,1], desc: "Quẻ Tổn khuyên bạn nên giản đơn hóa, giảm bớt những gì thừa thãi. Đôi khi việc bớt đi lại mang lại nhiều hơn. Hãy tập trung vào những gì thực sự quan trọng, loại bỏ những gì không cần thiết." },
    { name: "䷟ Ích - Quẻ Thêm Vào", lines: [0,1,1,1,0,0], desc: "Quẻ Ích báo hiệu sự gia tăng, lợi ích và tăng trưởng. Đây là thời điểm tốt để mở rộng, đầu tư và phát triển. Nhưng hãy đảm bảo rằng sự tăng trưởng này mang lại lợi ích cho tất cả, không chỉ riêng bạn." },
    { name: "䷠ Quải - Quẻ Quyết Đoán", lines: [1,1,1,1,1,0], desc: "Quẻ này đòi hỏi sự quyết đoán, can đảm để loại bỏ những gì không tốt. Đừng do dự, hãy hành động dứt khoát nhưng công bằng. Đây là lúc để đưa ra quyết định quan trọng và kiên định với nó." },
    { name: "䷡ Cấu - Quẻ Gặp Gỡ", lines: [0,1,1,1,1,1], desc: "Quẻ Cấu nói về sự gặp gỡ bất ngờ, có thể là cơ hội hoặc thử thách. Hãy cẩn thận trong các mối quan hệ mới, không vội tin tưởng hoàn toàn. Quan sát và hiểu rõ trước khi cam kết." },
    { name: "䷢ Tụy - Quẻ Tụ Họp", lines: [0,0,0,1,1,0], desc: "Quẻ này báo hiệu sự tập hợp, đoàn kết. Đây là thời điểm tốt để tổ chức sự kiện, họp mặt và xây dựng cộng đồng. Sức mạnh đến từ sự hợp tác và tinh thần tập thể. Hãy kết nối với mọi người." },
    { name: "䷣ Thăng - Quẻ Thăng Tiến", lines: [0,1,1,0,0,0], desc: "Quẻ Thăng báo hiệu sự thăng tiến mạnh mẽ, phát triển liên tục. Đây là thời kỳ thuận lợi để tiến lên, đạt được mục tiêu cao hơn. Hãy nắm bắt cơ hội, làm việc chăm chỉ và không ngừng cải thiện bản thân." },
    { name: "䷤ Khốn - Quẻ Khó Khăn", lines: [0,1,0,1,1,0], desc: "Quẻ Khốn cảnh báo về tình trạng khó khăn, bị giới hạn. Đây là thời điểm thử thách, nhưng cũng là cơ hội để tìm ra sức mạnh nội tại. Hãy giữ vững tinh thần, kiên nhẫn và tin tưởng vào bản thân." },
    { name: "䷥ Tỉnh - Quẻ Giếng Nước", lines: [0,1,1,0,1,0], desc: "Quẻ này tượng trưng cho nguồn cung cấp không ngừng, sự nuôi dưỡng. Hãy trở thành nguồn lực cho người khác, chia sẻ những gì bạn có. Giống như giếng nước, hãy luôn sẵn sàng giúp đỡ mà không cạn kiệt." },
    { name: "䷦ Cách - Quẻ Cách Mạng", lines: [1,0,1,1,1,0], desc: "Quẻ Cách báo hiệu sự thay đổi lớn, cải cách cần thiết. Đây là lúc để phá bỏ những gì lỗi thời và tạo ra cái mới. Hãy dũng cảm đổi mới nhưng cũng cẩn thận để không phá hủy những giá trị tốt đẹp." },
    { name: "䷧ Đỉnh - Quẻ Đỉnh Cao", lines: [0,1,1,1,0,1], desc: "Quẻ Đỉnh tượng trưng cho đỉnh cao, sự hoàn thiện và ổn định. Bạn đang ở vị trí tốt, hãy duy trì và phát huy. Nhưng cũng nhớ rằng ở đỉnh cao cần cẩn thận, khiêm tốn và không ngừng học hỏi." },
    { name: "䷨ Chấn (Trùng)", lines: [1,0,0,1,0,0], desc: "Quẻ này nhấn mạnh sự chuyển động mạnh, thức tỉnh kép. Những thay đổi lớn đang đến, hãy sẵn sàng. Năng lượng mạnh mẽ này cần được điều khiển khôn ngoan để mang lại kết quả tích cực." },
    { name: "䷩ Cấn (Trùng)", lines: [0,0,1,0,0,1], desc: "Quẻ này khuyên về sự tĩnh lặng sâu sắc, dừng lại hoàn toàn. Đây là lúc để thiền định, suy ngẫm sâu về bản thân và cuộc sống. Đừng hành động vội vàng, hãy để tâm trí được nghỉ ngơi và thanh lọc." },
    { name: "䷪ Tiệm - Quẻ Tiến Dần", lines: [0,0,1,0,1,1], desc: "Quẻ Tiệm khuyên bạn nên tiến bộ từng bước, không vội vàng. Mọi việc cần thời gian để phát triển đúng cách. Hãy kiên nhẫn, làm việc đều đặn và tin tưởng vào quá trình. Thành công bền vững đến từ những bước đi chắc chắn." },
    { name: "䷫ Qui Muội", lines: [1,1,0,1,0,0], desc: "Quẻ này nói về các mối quan hệ, hôn nhân và cam kết. Đây là thời điểm tốt để xây dựng mối quan hệ lâu dài, hợp tác nghiêm túc. Hãy chân thành, tôn trọng và có trách nhiệm trong mọi cam kết." },
    { name: "䷬ Phong - Quẻ Phong Phú", lines: [1,0,1,0,0,1], desc: "Quẻ Phong báo hiệu thời kỳ thịnh vượng, dồi dào. Đây là đỉnh cao của thành công, hãy tận hưởng nhưng cũng nhớ chia sẻ. Khi phong phú nhất cũng là lúc cần cẩn thận nhất để không lãng phí và kiêu ngạo." },
    { name: "䷭ Lữ - Quẻ Du Hành", lines: [0,0,1,1,0,1], desc: "Quẻ Lữ nói về hành trình, thay đổi và tìm kiếm. Có thể bạn đang trong giai đoạn chuyển tiếp hoặc khám phá. Hãy giữ thái độ cởi mở, linh hoạt và học hỏi từ trải nghiệm. Mỗi hành trình đều mang đến bài học." },
    { name: "䷮ Tốn (Trùng)", lines: [1,1,0,1,1,0], desc: "Quẻ này nhấn mạnh sự du nhập sâu, ảnh hưởng lâu dài. Hãy kiên trì theo đuổi mục tiêu với sự khiêm tốn và khéo léo. Tác động nhẹ nhàng nhưng liên tục sẽ mang lại kết quả vững chắc hơn những nỗ lực mạnh mẽ nhất thời." },
    { name: "䷯ Đoài (Trùng)", lines: [0,1,1,0,1,1], desc: "Quẻ này mang đến niềm vui kép, sự vui vẻ lan tỏa. Đây là thời kỳ hạnh phúc, giao lưu và thành công trong các mối quan hệ. Hãy chia sẻ niềm vui, lan tỏa năng lượng tích cực nhưng cũng giữ được sự chân thành." },
    { name: "䷰ Hoán - Quẻ Giải Tán", lines: [0,1,1,0,0,0], desc: "Quẻ Hoán nói về sự phân tán, giải tỏa. Những gì cứng nhắc cần được làm mềm, những gì tích tụ cần được giải phóng. Hãy để mọi thứ tự nhiên, không nắm giữ quá chặt. Sự linh hoạt mang lại tự do." },
    { name: "䷱ Tiết - Quẻ Điều Độ", lines: [0,1,0,1,1,0], desc: "Quẻ Tiết nhấn mạnh sự tiết chế, điều độ. Hãy giữ cân bằng trong mọi việc, không quá cũng không thiếu. Kỷ luật và tự chủ sẽ mang lại thành công bền vững. Biết dừng đúng lúc là sự khôn ngoan." },
    { name: "䷲ Trung Phu", lines: [0,1,1,0,0,1], desc: "Quẻ này ca ngợi lòng tin, sự chân thành từ bên trong. Hãy giữ vững niềm tin và hành động với lòng thành. Sự chân thật sẽ cảm hóa người khác và mở ra những cơ hội mới. Lòng tin là nền tảng của mọi thành công." },
    { name: "䷳ Tiểu Quá", lines: [0,0,1,1,0,0], desc: "Quẻ này khuyên về sự khiêm tốn trong hành động nhỏ. Đừng quá tham vọng lúc này, hãy làm những việc nhỏ nhưng đúng đắn. Sự cẩn thận và khiêm tốn trong từng bước sẽ mang lại kết quả tốt hơn những kế hoạch lớn lao." },
    { name: "䷴ Ký Tế", lines: [1,0,1,0,1,0], desc: "Quẻ Ký Tế báo hiệu sự hoàn thành, cân bằng đã đạt được. Mọi việc đang ở vị trí đúng đắn. Tuy nhiên, hãy cẩn thận duy trì, vì sau khi hoàn thành là khởi đầu của chu kỳ mới. Đừng tự mãn mà hãy chuẩn bị cho tương lai." },
    { name: "䷵ Vị Tế", lines: [0,1,0,1,0,1], desc: "Quẻ Vị Tế nói về việc chưa hoàn thành, vẫn còn tiềm năng phát triển. Đừng nản lòng vì chưa đạt được mục tiêu. Hãy kiên trì, mọi thứ đang tiến triển theo đúng hướng. Sự kiên nhẫn và nỗ lực sẽ mang lại thành công." }
];

let tapCount = 0;
let isActive = false;
let countdown;
let timeLeft = 5;

const envelope = document.getElementById('envelope');
const tapCountEl = document.getElementById('tapCount');
const timerEl = document.getElementById('timer');
const resultModal = document.getElementById('resultModal');
const userName = document.getElementById('userName');
const userWish = document.getElementById('userWish');

envelope.addEventListener('click', handleTap);
envelope.addEventListener('touchstart', handleTap);

function handleTap(e) {
    e.preventDefault();
    
    if (!isActive) {
        startGame();
    }
    
    if (isActive) {
        tapCount++;
        tapCountEl.textContent = `Tap: ${tapCount}`;
        envelope.classList.add('shaking');
        setTimeout(() => envelope.classList.remove('shaking'), 100);
        createCelebration(e);
    }
}

function startGame() {
    isActive = true;
    tapCount = 0;
    timeLeft = 5;
    envelope.classList.remove('disabled');
    
    countdown = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `⏱️ ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(countdown);
    isActive = false;
    envelope.classList.add('disabled');
    timerEl.textContent = '';
    
    setTimeout(() => {
        showResult();
    }, 500);
}

function calculateMoney(taps) {
    // Tính toán dựa trên số lần tap
    const rates = [
        { value: 200000, threshold: 80, chance: 0.08 },
        { value: 100000, threshold: 60, chance: 0.10 },
        { value: 50000, threshold: 40, chance: 0.10 },
        { value: 30000, threshold: 20, chance: 0.10 },
        { value: 20000, threshold: 0, chance: 0.10 }
    ];
    
    for (let rate of rates) {
        if (taps >= rate.threshold && Math.random() < rate.chance + (taps / 1000)) {
            return rate.value;
        }
    }
    
    // Default fallback
    return taps >= 50 ? 50000 : taps >= 30 ? 30000 : 20000;
}

async function showResult() {
    const name = userName.value.trim() || 'Bạn';
    const wish = userWish.value.trim();
    const money = calculateMoney(tapCount);
    const hexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)];
    
    document.getElementById('resultName').textContent = name;
    document.getElementById('moneyAmount').textContent = money.toLocaleString('vi-VN') + ' đồng';
    document.getElementById('finalTapCount').textContent = tapCount;
    document.getElementById('hexagramName').textContent = hexagram.name;
    
    // Draw hexagram lines
    const linesContainer = document.getElementById('hexagramLines');
    linesContainer.innerHTML = '';
    hexagram.lines.forEach((line, index) => {
        if (line === 1) {
            const solid = document.createElement('div');
            solid.className = 'hexagram-line';
            solid.style.animationDelay = `${index * 0.1}s`;
            linesContainer.appendChild(solid);
        } else {
            const broken = document.createElement('div');
            broken.className = 'hexagram-line broken';
            broken.style.animationDelay = `${index * 0.1}s`;
            linesContainer.appendChild(broken);
            
            const broken2 = document.createElement('div');
            broken2.className = 'hexagram-line broken';
            broken2.style.animationDelay = `${index * 0.1}s`;
            linesContainer.appendChild(broken2);
        }
    });
    
    let description = hexagram.desc;
    // if (wish) {
    //     description += `\n\n💫 Về mong muốn "${wish}" của bạn: Quẻ này gợi ý rằng bạn nên ${getWishAdvice(hexagram.name)}.`;
    // }

    async function getAIAdvice(hexagram, wish) {
        const response = await fetch("https://svlixi-production.up.railway.app/api/fortune", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hexagramName: hexagram.name,
                hexagramDesc: hexagram.desc,
                wish: wish
            })
        });

        const data = await response.json();
        return data.advice;
    }

        if (wish) {
            description += "\n\n💫 Đang xin lời khuyên từ vũ trụ...";
            document.getElementById('hexagramDescription').textContent = description;

            const aiAdvice = await getAIAdvice(hexagram, wish);
            description += "\n\n✨ Lời khuyên dành cho bạn:\n" + aiAdvice;
        }

    
    document.getElementById('hexagramDescription').textContent = description;
    resultModal.classList.add('show');
    
    createFireworks();
}

// async function showResult() {
//     const name = userName.value.trim() || 'Bạn';
//     const wish = userWish.value.trim();
//     const money = calculateMoney(tapCount);
//     const hexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)];

//     document.getElementById('resultName').textContent = name;
//     document.getElementById('moneyAmount').textContent = money.toLocaleString('vi-VN') + ' đồng';
//     document.getElementById('finalTapCount').textContent = tapCount;
//     document.getElementById('hexagramName').textContent = hexagram.name;

//     let description = hexagram.desc;

//     if (wish) {
//         description += "\n\n💫 Đang xin lời khuyên từ vũ trụ...";
//         document.getElementById('hexagramDescription').textContent = description;

//         const aiAdvice = await getAIAdvice(hexagram, wish);
//         description += "\n\n✨ Lời khuyên dành cho bạn:\n" + aiAdvice;
//     }

//     document.getElementById('hexagramDescription').textContent = description;
//     resultModal.classList.add('show');
// }


function getWishAdvice(hexagramName) {
    const advices = [
        'kiên trì và tin tưởng vào quá trình',
        'linh hoạt và mở lòng với những cơ hội mới',
        'hành động với sự quyết đoán nhưng khôn ngoan',
        'kiên nhẫn chờ đợi thời điểm thích hợp',
        'hợp tác với những người cùng chí hướng',
        'giữ vững niềm tin và không bỏ cuộc',
        'cân bằng giữa nỗ lực và nghỉ ngơi',
        'học hỏi từ kinh nghiệm và điều chỉnh hướng đi'
    ];
    return advices[Math.floor(Math.random() * advices.length)];
}

function resetGame() {
    resultModal.classList.remove('show');
    tapCount = 0;
    tapCountEl.textContent = 'Tap: 0';
    envelope.classList.remove('disabled');
}

function createCelebration(e) {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.style.left = e.pageX + 'px';
    celebration.style.top = e.pageY + 'px';
    celebration.style.background = ['#ff6b6b', '#ffd93d', '#ff8e53'][Math.floor(Math.random() * 3)];
    document.body.appendChild(celebration);
    setTimeout(() => celebration.remove(), 1000);
}

function createFireworks() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.background = ['#ff6b6b', '#ffd93d', '#ff8e53', '#4ecdc4'][Math.floor(Math.random() * 4)];
            firework.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
            firework.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 2000);
        }, i * 50);
    }
}

// Add more lanterns dynamically
window.addEventListener('load', () => {
    const bgDecoration = document.querySelector('.bg-decoration');
    for (let i = 0; i < 6; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.animationDelay = Math.random() * 2 + 's';
        firework.style.background = ['#ff6b6b', '#ffd93d', '#ff8e53'][Math.floor(Math.random() * 3)];
        bgDecoration.appendChild(firework);
    }
});