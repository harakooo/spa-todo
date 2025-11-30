namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() {
        return Task::all();
    }

    public function store(Request $request) {
        $request->validate(['title' => 'required|string']);
        return Task::create($request->only('title'));
    }

    public function update(Request $request, Task $Task) {
        $Task->update($request->only('title', 'completed'));
        return $Task;
    }

    public function destroy(Task $Task) {
        $Task->delete();
        return response()->noContent();
    }
}