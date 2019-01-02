const sample1 = [
    {
      major: "Social Work",
      value: 72.3,
      color: "#ffb6c1"
    },
    {
      major: "Special Education",
      value: 72.9,
      color: "#32cd32"
    },
    {
      major: "English",
      value: 51.9,
      color: "#ffff00"
    },
    {
      major: "Elementary Education",
      value: 86.4,
      color: "#48d1cc"
    },
    {
      major: "Psychology",
      value: 54.6,
      color: "#ffb6c1"
    },
    {
      major: "Animal Sciences",
      value: 66.5,
      color: "#adff2f"
    },    
    {
      major: "Health Science",
      value: 66.0,
      color: "#ff0000"
    },
    {
      major: "HDFS",
      value: 82.6,
      color: "#00bfff"
    },
    
    {
      major: "Speech & Hearing Sci",
      value: 94.2,
      color: "#ffd700"
    },
    {
      major: "FSHN",
      value: 50.2,
      color: "#66cdaa"
    }
  ];

  const svg1 = d3.select("#vec1");
  const svgContainer1 = d3.select("#container1");

  const chart1 = svg1
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  const xScale1 = d3
    .scaleBand()
    .range([0, width])
    .domain(sample1.map(s => s.major))
    .padding(0.4);

  const yScale1 = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

  const makeYLines1 = () => d3.axisLeft().scale(yScale1);

  chart1
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale1));

  chart1.append("g").call(d3.axisLeft(yScale1));

  chart1
    .append("g")
    .attr("class", "grid")
    .call(
      makeYLines1()
        .tickSize(-width, 0, 0)
        .tickFormat("")
    );

  const barGroups1 = chart1
    .selectAll()
    .data(sample1)
    .enter()
    .append("g");

  barGroups1
    .append("rect")
    .attr("class", "bar")
    .attr("x", g => xScale1(g.major))
    .attr("y", g => yScale1(g.value))
    .attr("height", g => height - yScale1(g.value))
    .attr("width", xScale1.bandwidth())
    .on("mouseenter", function(actual, i) {
      d3.selectAll(".value").attr("opacity", 0);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 0.6)
        .style("fill",actual.color)
        .attr("x", a => xScale1(a.major) - 5)
        .attr("width", xScale1.bandwidth() + 10);


      y = yScale1(actual.value);

      line = chart1
        .append("line")
        .attr("id", "limit")
        .attr("x1", 0)
        .attr("y1", y)
        .attr("x2", width)
        .attr("y2", y);

      barGroups1
        .append("text")
        .attr("class", "divergence")
        .attr("x", a => xScale1(a.major) + xScale1.bandwidth() / 2)
        .attr("y", a => yScale1(a.value) + 30)
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .text((a, idx) => {
          const divergence = (a.value - actual.value).toFixed(1);

          let text = "";
          if (divergence > 0) text += "+";
          text += `${divergence}%`;

          return idx !== i ? text : "";
        });
    })
    .on("mouseleave", function() {
      d3.selectAll(".value").attr("opacity", 1);

      d3.select(this)
        .transition()
        .duration(300)
        .style("fill","#ffbf00")
        .attr("opacity", 1)
        .attr("x", a => xScale1(a.major))
        .attr("width", xScale1.bandwidth());

      chart1.selectAll("#limit").remove();
      chart1.selectAll(".divergence").remove();
    });

  barGroups1
    .append("text")
    .attr("class", "value")
    .attr("x", a => xScale1(a.major) + xScale1.bandwidth() / 2)
    .attr("y", a => yScale1(a.value) + 30)
    .attr("text-anchor", "middle")
    .text(a => `${a.value}%`);

  svg1
    .append("text")
    .attr("class", "label")
    .attr("x", -(height / 2) - margin)
    .attr("y", margin / 2.4)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Gender Disparity (%)");

  svg1
    .append("text")
    .attr("class", "label")
    .attr("x", width / 2 + margin)
    .attr("y", height + margin * 1.7)
    .attr("text-anchor", "middle")
    .text("Majors");

  svg1
    .append("text")
    .attr("class", "title")
    .attr("x", width / 2 + margin)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .text("Most Female Dominated Majors in UIUC (Fall 2018)");

  svg1
    .append("text")
    .attr("class", "source")
    .attr("x", width - margin / 2)
    .attr("y", height + margin * 1.7)
    .attr("text-anchor", "start")
    .text("Mihika Poddar");
