// const sample3 = [
//     {
//       major: 'Computer Eng',
//       value: 74.3,
//       color: '#48d1cc'
//     },
//     {
//       major: "Social Work",
//       value: 72.3,
//       color: "#ff6347"
//     },
//     {
//       major: 'Aerospace Eng',
//       value: 69.6,
//       color: '#48d1cc'
//     },
  
//     {
//       major: 'Electrical Eng',
//       value: 72.2,
//       color: '#48d1cc'
//     },
//     {
//       major: "Special Educ",
//       value: 72.9,
//       color: "#ff6347"
//     },
//     {
//       major: 'Tech Systems',
//       value: 80.3,
//       color: '#48d1cc'
//     },
//     {
//       major: "Elementary Educ",
//       value: 86.4,
//       color: "#ff6347"
//     },  
//     {
//       major: 'Eng Mechanics',
//       value: 71.4,
//       color: '#48d1cc'
//     },
//     {
//       major: "HDFS",
//       value: 82.6,
//       color: "#ff6347"
//     },    
//     {
//       major: "SHS",
//       value: 94.2,
//       color: "#ff6347"
//     }
//   ];

//   const svg3 = d3.select('#vec2');
//   const svg3Container3 = d3.select('#container2');
  
//   const margin = 80;
//   const width = 1000 - 2 * margin;
//   const height = 600 - 2 * margin;

//   const chart3 = svg3.append('g')
//     .attr('transform', `translate(${margin}, ${margin})`);

//   const xScale3 = d3.scaleBand()
//     .range([0, width])
//     .domain(sample3.map((s) => s.major))
//     .padding(0.4)
  
//   const yScale3 = d3.scaleLinear()
//     .range([height, 0])
//     .domain([0, 100]);

//   const makeYLines3 = () => d3.axisLeft()
//     .scale(yScale3)

//   chart3.append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(xScale3));

//   chart3.append('g')
//     .call(d3.axisLeft(yScale3));

//   chart3.append('g')
//     .attr('class', 'grid')
//     .call(makeYLines3()
//       .tickSize(-width, 0, 0)
//       .tickFormat('')
//     )

//   const barGroups3 = chart3.selectAll()
//     .data(sample3)
//     .enter()
//     .append('g')

//   barGroups3
//     .append('rect')
//     .attr('class', 'bar')
//     .attr('x', (g) => xScale3(g.major))
//     .attr('y', (g) => yScale3(g.value))
//     .attr('height', (g) => height - yScale3(g.value))
//     .attr('width', xScale3.bandwidth())
//     .on('mouseenter', function (actual, i) {
//       d3.selectAll('.value')
//         .attr('opacity', 0)

//       d3.select(this)
//         .transition()
//         .duration(300)
//         .attr('opacity', 0.6)
//         .style("fill",actual.color)
//         .attr('x', (a) => xScale3(a.major) - 5)
//         .attr('width', xScale3.bandwidth() + 10)

//       y = yScale3(actual.value)

//       line = chart3.append('line')
//         .attr('id', 'limit')
//         .attr('x1', 0)
//         .attr('y1', y)
//         .attr('x2', width)
//         .attr('y2', y)

//       barGroups3.append('text')
//         .attr('class', 'divergence')
//         .attr('x', (a) => xScale3(a.major) + xScale3.bandwidth() / 2)
//         .attr('y', (a) => yScale3(a.value) + 30)
//         .attr('fill', 'white')
//         .attr('text-anchor', 'middle')
//         .text((a, idx) => {
//           const divergence3 = (a.value - actual.value).toFixed(1)
          
//           let text = ''
//           if (divergence3 > 0) text += '+'
//           text += `${divergence3}%`

//           return idx !== i ? text : '';
//         })

//     })
//     .on('mouseleave', function () {
//       d3.selectAll('.value')
//         .attr('opacity', 1)

//       d3.select(this)
//         .transition()
//         .duration(300)
//         .style("fill","#ffbf00")
//         .attr('opacity', 1)
//         .attr('x', (a) => xScale3(a.major))
//         .attr('width', xScale3.bandwidth())

//       chart3.selectAll('#limit').remove()
//       chart3.selectAll('.divergence').remove()
//     })

//   barGroups3 
//     .append('text')
//     .attr('class', 'value')
//     .attr('x', (a) => xScale3(a.major) + xScale3.bandwidth() / 2)
//     .attr('y', (a) => yScale3(a.value) + 30)
//     .attr('text-anchor', 'middle')
//     .text((a) => `${a.value}%`)
  
//   svg3
//     .append('text')
//     .attr('class', 'label')
//     .attr('x', -(height / 2) - margin)
//     .attr('y', margin / 2.4)
//     .attr('transform', 'rotate(-90)')
//     .attr('text-anchor', 'middle')
//     .text('Gender Disparity (%)')

//   svg3.append('text')
//     .attr('class', 'label')
//     .attr('x', width / 2 + margin)
//     .attr('y', height + margin * 1.7)
//     .attr('text-anchor', 'middle')
//     .text('Majors')

//   svg3.append('text')
//     .attr('class', 'title')
//     .attr('x', width / 2 + margin)
//     .attr('y', 40)
//     .attr('text-anchor', 'middle')
//     .text('Top 10 Majors with Most Gender Disparity (Fall 2018)')
  
//     svg3.append('text')
//     .attr('class', 'source')
//     .attr('x', width - margin / 2)
//     .attr('y', height + margin * 1.7)
//     .attr('text-anchor', 'start')
//     .text('Mihika Poddar')
    // console.log("hello")
    // var margin = {top: 50, right: 20, bottom: 10, left: 65},
    //     width = 800 - margin.left - margin.right,
    //     height = 500 - margin.top - margin.bottom;
    
    // var y = 
    //     d3.scaleBand()
    // .rangeRound([0, height])
    // .padding(0.3);
    
    // var x = d3.scaleLinear()
    //     .rangeRound([0, width]);
    
    // var color = d3.scaleBand()
    //     .range(["#c7001e", "#086fad"]);
    
    // var xAxis = d3.axisTop(x);
    
    // var yAxis = d3.axisLeft(y);
    
    // console.log(margin.left)
    //  svg3 = d3.select("#figure").append("svg3")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //     .attr("id", "d3-plot")
    //     .append("g")
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    //   color.domain(["Female", "Male"]);
    // let data
    //   d3.csv("UI_Data/src/convertcsv.csv",function(data) {
    //       console.log(data)
    //     // calc percentages
    //     var x0 = -parseFloat(data["Female"]);
    //     var idx = 0;
    //     data.boxes = color.domain().map(function(name) { return {name: name, x0: x0, x1: x0 += parseFloat(data[name]), N: +data.N, n: +data[idx += 1]}; });
    //     console.log(data.boxes)
    
    //   var min_val = data.boxes[0].x0
    
    //   var max_val = data.boxes[1].x1
    
    //   x.domain([min_val, max_val]).nice();
    //   y.domain(data["Major"]);
    
    //   svg3.append("g")
    //       .attr("class", "x axis")
    //       .call(xAxis);
    
    //   svg3.append("g")
    //       .attr("class", "y axis")
    //       .call(yAxis)
    
    //   var vakken = svg3.selectAll(".major")
    //       .data(data)
    //     .enter().append("g")
    //       .attr("class", "bar")
    //       .attr("transform", function(d) { return "translate(0," + y(d.Major) + ")"; });
    
    //   var bars = vakken.selectAll("rect")
    //       .data(function(d) { return d.boxes; })
    //     .enter().append("g").attr("class", "subbar");
    
    //   bars.append("rect")
    //       .attr("height", y.bandwidth())
    //       .attr("x", function(d) { return x(d.x0); })
    //       .attr("width", function(d) { return x(d.x1) - x(d.x0); })
    //       .style("fill", function(d) { return color(d.name); });
    
    //   bars.append("text")
    //       .attr("x", function(d) { return x(d.x0); })
    //       .attr("y", y.bandwidth()/2)
    //       .attr("dy", "0.5em")
    //       .attr("dx", "0.5em")
    //       .style("font" ,"10px sans-serif")
    //       .style("text-anchor", "begin")
    //       .text(function(d) { return d.n !== 0 && (d.x1-d.x0)>3 ? d.n : "" });
    
    //   vakken.insert("rect",":first-child")
    //       .attr("height", y.bandwidth())
    //       .attr("x", "1")
    //       .attr("width", width)
    //       .attr("fill-opacity", "0.5")
    //       .style("fill", "#F5F5F5")
    //       .attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });
    
    //   svg3.append("g")
    //       .attr("class", "y axis")
    //   .append("line")
    //       .attr("x1", x(0))
    //       .attr("x2", x(0))
    //       .attr("y2", height);
    
    //   var startp = svg3.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
    //   // this is not nice, we should calculate the bounding box and use that
    //   var legend_tabs = [0, 120];
    //   var legend = startp.selectAll(".legend")
    //       .data(color.domain().slice())
    //     .enter().append("g")
    //       .attr("class", "legend")
    //       .attr("transform", function(d, i) { return "translate(" + legend_tabs[i] + ",-45)"; });
    
    //   legend.append("rect")
    //       .attr("x", 0)
    //       .attr("width", 18)
    //       .attr("height", 18)
    //       .style("fill", color);
    
    //   legend.append("text")
    //       .attr("x", 22)
    //       .attr("y", 9)
    //       .attr("dy", ".35em")
    //       .style("text-anchor", "begin")
    //       .style("font" ,"10px sans-serif")
    //       .text(function(d) { return d; });
    
    //   d3.selectAll(".axis path")
    //       .style("fill", "none")
    //       .style("stroke", "#000")
    //       .style("shape-rendering", "crispEdges")
    
    //   d3.selectAll(".axis line")
    //       .style("fill", "none")
    //       .style("stroke", "#000")
    //       .style("shape-rendering", "crispEdges")
    
    //   var movesize = width/2 - startp.node().getBBox().width/2;
    //   d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");
    
    //         });

    var data = [
      { grade: 'Computer Engineering',  female: 25.7, male: 74.3 },
      { grade: 'Social Work',  female: 72.3, male: 27.7 },
      { grade: 'Aerospace Engineering',  female: 30.4, male:69.6 },
      { grade: 'Electrical Engineering',  female: 27.8, male: 72.2 },
      { grade: 'Special Education',  female: 72.9, male: 27.1},
      { grade: 'Technical Systems',  female: 19.7, male: 80.3},
      { grade: 'Elementary Education',  female:86.4, male: 13.6 },
      { grade: 'Engineering Mechanics',  female: 28.6, male: 71.4 },
      { grade: 'Human Development and Family Studies',  female: 82.6, male: 17.4 },
      { grade: 'Speech and Hearing Science',  female: 94.2, male: 5.8 },
    ];
    
    var chart3 = d3.select('#chart')
    var margin = {
      top: 50,
      right: 0,
      bottom: 20,
      left: 220,
    };
    var width = chart3.attr('width') - margin.left - margin.right;
    var height = chart3.attr('height') - margin.top - margin.bottom;
    var innerChart = chart3.append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    
    // var pFormat = d3.format('.2r');
    
    // var total = d3.sum(data, function(d) { return d.female + d.male; });
    
    // data.map(function(d) {
    //   d.female = d.female / total;
    //   d.male = d.male / total;
    // });
    
    var x = d3.scaleLinear()
      .domain([0, d3.max([
        d3.max(data, function(d) { return d.female; }),
        d3.max(data, function(d) { return d.male; })
       ])])
      .rangeRound([0, width / 2]);
    
    var y = d3.scaleBand()
      .domain(data.map(function(d) { return d.grade; }))
      .rangeRound([0, height]);
    
    var grade = innerChart.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', function(d, i) {
        return 'translate(0, ' + (i * y.bandwidth()) + ')';
      });
    
    grade.append('rect')
      .attr('class', 'bar bar--female')
      .attr('x', function(d) { return (width / 2) - x(d.female); })
      .attr('width', function(d) { return x(d.female); })
      .attr('height', y.bandwidth());
    
    grade.append('text')
      .attr('class', 'label')
      .attr('alignment-baseline', 'middle')
      .attr('x', function(d) { return (width / 2) - x(d.female) + 4; })
      .attr('y', y.bandwidth() / 2)
      .text(function(d) {
        return d.female + '%';
      });
    
    grade.append('rect')
      .attr('class', 'bar bar--male')
      .attr('x', width / 2)
      .attr('width', function(d) { return x(d.male); })
      .attr('height', y.bandwidth());
    
    grade.append('text')
      .attr('class', 'label')
      .attr('alignment-baseline', 'middle')
      .attr('text-anchor', 'end')
      .attr('x', function(d) { return (width / 2) + x(d.male) - 4; })
      .attr('y', y.bandwidth() / 2)
      .text(function(d) {
        return d.male + '%';
      });
    
    innerChart.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y));
    
    chart3.append('text')
      .attr('class', 'axis axis--x')
      .attr('x', width / 4 + 220)
      .attr('y', height + margin.top + margin.bottom)
      .attr('text-anchor', 'middle')
      .text('Female');
    
    chart3.append('text')
      .attr('class', 'axis axis--x')
      .attr('x', width * .75 + 220 )
      .attr('y', height + margin.top + margin.bottom)
      .attr('text-anchor', 'middle')
      .text('Male');
    
    chart3.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + 110)
      .attr('y', 25)
      .attr('text-anchor', 'middle')
      .text('Top 10 Majors with Most Gender Disparity');