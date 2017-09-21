"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var delegates_1 = require("./delegates");
var LocalVideo = (function (_super) {
    __extends(LocalVideo, _super);
    function LocalVideo() {
        var _this = _super.call(this) || this;
        _this._videoViewDelegate = delegates_1.VideoViewDelegate.initWithOwner(new WeakRef(_this));
        _this.localVideoView = TVIVideoView.alloc().initWithFrameDelegate(CGRectMake(0, 0, 0, 0), _this._videoViewDelegate);
        return _this;
    }
    LocalVideo.prototype.createNativeView = function () {
        return this.localVideoView;
    };
    LocalVideo.prototype.initNativeView = function () {
    };
    LocalVideo.prototype.disposeNativeView = function () {
        this.nativeView = null;
    };
    Object.defineProperty(LocalVideo.prototype, "events", {
        get: function () {
            return this._videoViewDelegate.events;
        },
        enumerable: true,
        configurable: true
    });
    return LocalVideo;
}(view_1.View));
exports.LocalVideo = LocalVideo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxWaWRlby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2FsVmlkZW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBb0M7QUFJcEMseUNBQWdEO0FBS2hEO0lBQWdDLDhCQUFJO0lBTWhDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsS0FBSSxDQUFDLGtCQUFrQixHQUFHLDZCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdFLEtBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7SUFFdEgsQ0FBQztJQUVNLHFDQUFnQixHQUF2QjtRQUdJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRS9CLENBQUM7SUFHTSxtQ0FBYyxHQUFyQjtJQUlBLENBQUM7SUFFTSxzQ0FBaUIsR0FBeEI7UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUUzQixDQUFDO0lBRUQsc0JBQUksOEJBQU07YUFBVjtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1FBRTFDLENBQUM7OztPQUFBO0lBd0JMLGlCQUFDO0FBQUQsQ0FBQyxBQTlERCxDQUFnQyxXQUFJLEdBOERuQztBQTlEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21PYmplY3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFZpZGVvVmlld0RlbGVnYXRlIH0gZnJvbSAnLi9kZWxlZ2F0ZXMnO1xuXG5kZWNsYXJlIHZhciBUVklWaWRlb1ZpZXcsIENHUmVjdE1ha2U7XG4vLyBjb25zdCB2aWRlb1ZpZXcgPSBUVklWaWRlb1ZpZXcuYWxsb2MoKS5pbml0KCk7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFZpZGVvIGV4dGVuZHMgVmlldyB7XG5cbiAgICBsb2NhbFZpZGVvVmlldzogYW55O1xuICAgIF92aWRlb1ZpZXdEZWxlZ2F0ZTogYW55OyBcbiAgICBuYXRpdmVWaWV3OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl92aWRlb1ZpZXdEZWxlZ2F0ZSA9IFZpZGVvVmlld0RlbGVnYXRlLmluaXRXaXRoT3duZXIobmV3IFdlYWtSZWYodGhpcykpO1xuICAgICAgICB0aGlzLmxvY2FsVmlkZW9WaWV3ID0gVFZJVmlkZW9WaWV3LmFsbG9jKCkuaW5pdFdpdGhGcmFtZURlbGVnYXRlKENHUmVjdE1ha2UoMCwgMCwgMCwgMCksIHRoaXMuX3ZpZGVvVmlld0RlbGVnYXRlKTsgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlTmF0aXZlVmlldygpOiBhbnkge1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIFVJVmlldy5uZXcoKTsgXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsVmlkZW9WaWV3O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaW5pdE5hdGl2ZVZpZXcoKTogdm9pZCB7ICBcblxuICAgICAgICAvLyB0aGlzLm5hdGl2ZVZpZXcuYWRkU3VidmlldyggdGhpcy5sb2NhbFZpZGVvVmlldyApO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2VOYXRpdmVWaWV3KCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3ID0gbnVsbDtcblxuICAgIH1cblxuICAgIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9WaWV3RGVsZWdhdGUuZXZlbnRzO1xuXG4gICAgfVxuXG4gICAgLy8gZ2V0IGlvcygpOiBhbnkge1xuXG4gICAgLy8gICAgIHJldHVybiB0aGlzLm5hdGl2ZVZpZXc7XG5cbiAgICAvLyB9ICAgICBcbiAgICBcbiAgICAvLyBwdWJsaWMgcmVtb3ZlVmlkZW9WaWV3KCkge1xuICAgICAgICBcbiAgICAvLyAgICAgdGhpcy5uYXRpdmVWaWV3LnJlbW92ZUZyb21TdXBlcnZpZXcoKTtcblxuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBvbkxvYWRlZCgpIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYG9uTG9hZGVkICR7dGhpcy53aWR0aH0sICR7dGhpcy5oZWlnaHR9YCk7XG4gICAgLy8gICAgIGlmICh0aGlzLndpZHRoKSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuZnJhbWUuc2l6ZS53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgLy8gICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuZnJhbWUuc2l6ZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufVxuIl19