const sample3 = [
    {
      major: 'Computer Eng',
      value: 74.3,
      color: '#48d1cc'
    },
    {
      major: "Social Work",
      value: 72.3,
      color: "#ff6347"
    },
    {
      major: 'Aerospace Eng',
      value: 69.6,
      color: '#48d1cc'
    },
  
    {
      major: 'Electrical Eng',
      value: 72.2,
      color: '#48d1cc'
    },
    {
      major: "Special Educ",
      value: 72.9,
      color: "#ff6347"
    },
    {
      major: 'Tech Systems',
      value: 80.3,
      color: '#48d1cc'
    },
    {
      major: "Elementary Educ",
      value: 86.4,
      color: "#ff6347"
    },  
    {
      major: 'Eng Mechanics',
      value: 71.4,
      color: '#48d1cc'
    },
    {
      major: "HDFS",
      value: 82.6,
      color: "#ff6347"
    },    
    {
      major: "SHS",
      value: 94.2,
      color: "#ff6347"
    }
  ];

  const svg3 = d3.select('#vec2');
  const svg3Container3 = d3.select('#container2');
  
  const margin = 80;
  const width = 1000 - 2 * margin;
  const height = 600 - 2 * margin;

  const chart3 = svg3.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

  const xScale3 = d3.scaleBand()
    .range([0, width])
    .domain(sample3.map((s) => s.major))
    .padding(0.4)
  
  const yScale3 = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

  const makeYLines3 = () => d3.axisLeft()
    .scale(yScale3)

  chart3.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale3));

  chart3.append('g')
    .call(d3.axisLeft(yScale3));

  chart3.append('g')
    .attr('class', 'grid')
    .call(makeYLines3()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )

  const barGroups3 = chart3.selectAll()
    .data(sample3)
    .enter()
    .append('g')

  barGroups3
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale3(g.major))
    .attr('y', (g) => yScale3(g.value))
    .attr('height', (g) => height - yScale3(g.value))
    .attr('width', xScale3.bandwidth())
    .on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0)

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .style("fill",actual.color)
        .attr('x', (a) => xScale3(a.major) - 5)
        .attr('width', xScale3.bandwidth() + 10)

      y = yScale3(actual.value)

      line = chart3.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)

      barGroups3.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale3(a.major) + xScale3.bandwidth() / 2)
        .attr('y', (a) => yScale3(a.value) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          const divergence3 = (a.value - actual.value).toFixed(1)
          
          let text = ''
          if (divergence3 > 0) text += '+'
          text += `${divergence3}%`

          return idx !== i ? text : '';
        })

    })
    .on('mouseleave', function () {
      d3.selectAll('.value')
        .attr('opacity', 1)

      d3.select(this)
        .transition()
        .duration(300)
        .style("fill","#ffbf00")
        .attr('opacity', 1)
        .attr('x', (a) => xScale3(a.major))
        .attr('width', xScale3.bandwidth())

      chart3.selectAll('#limit').remove()
      chart3.selectAll('.divergence').remove()
    })

  barGroups3 
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale3(a.major) + xScale3.bandwidth() / 2)
    .attr('y', (a) => yScale3(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}%`)
  
  svg3
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Gender Disparity (%)')

  svg3.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Majors')

  svg3.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Top 10 Majors with Most Gender Disparity (Fall 2018)')
  
    svg3.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Mihika Poddar')

