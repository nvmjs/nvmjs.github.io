var Counter = React.createClass({
	getInitialState: function(){

	},
	render: function () {	
	  var style = {width:1200,height:600,background:'#ccc'} 
	  return (
	  	<div>
	    	<canvas ref="canvasDom"  style={style} className="react-header">
	    		
	    	</canvas>	
	    </div>ss
	  );
	}
});

ReactDOM.render(
<div>
	<Counter />
</div>,	
document.getElementById('container')
);