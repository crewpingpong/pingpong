<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>KH 온라인 문방구</title>
</head>
<body>
<h1>
	KH 온라인 문방구
</h1>
<form action="orderProduct.do" method="post">
	<table>
		<thead>
			<tr>
				<th colspan="3">주문자 명</th>
			</tr>
			<tr>
				<th colspan="3"><input type="text"></th>
			</tr>
			<tr>
				<th>품목</th>
				<th>가격</th>
				<th>수량</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>검정 펜</td>
				<td>500원</td>
				<td><input type="number" name="black" min="0" max="100" value="0"></td>
			</tr>
			<tr>
				<td>빨간 펜</td>
				<td>700원</td>
				<td><input type="number" name="red" min="0" max="100" value="0"></td>
			</tr>
			<tr>
				<td>파란 펜</td>
				<td>500원</td>
				<td><input type="number" name="blue" min="0" max="100" value="0"></td>
			</tr>
			<tr>
				<td>화이트</td>
				<td>500원</td>
				<td><input type="number" naem="white" min="0" max="100" value="0"></td>
			</tr>
			<tr>
				<td colspan="3">
					<button type="submit">구매</button>
					<button type="reset">초기화</button>
				</td>
			</tr>
		</tbody>
	</table>
</form>

<P>  The time on the server is ${serverTime}. </P>
</body>
</html>
