const render = data => {

    const line = svg.selectAll(".line").data([data]);
    line.join("path")
        .transition().duration(1000)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(d => x(d.Year))
            .y(d => y(d.Total))
        )

};