/**
 * es2016 at 方法实现
 * @param arr
 * @param n
 * @returns
 */
export function at<T = any>(arr: Array<T>, n: number) {
  let index = Math.trunc(n) || 0

  // 如果索引为负数，则从数组末尾开始计算
  if (index < 0) {
    index += arr.length
  }
  // 检查索引是否越界
  if (index < 0 || index >= arr.length) {
    return undefined
  }
  return arr[index]
}

/**
 * 封装可选链和空值合并等操作
 * 其实可选链出来之前，类似的需求用的是短路运算符&&，这个方法的问题是冗余代码太多。
 */
export class OptionalChain {
  private obj
  constructor(value: any) {
    this.obj = value
  }
  get(property: string) {
    if (this.obj == null || this.obj == undefined) {
      return new OptionalChain(undefined)
    }
    const value = this.obj[property]
    return new OptionalChain(value)
  }
  call(method, ...args) {
    if (this.obj == null) {
      return new OptionalChain(undefined)
    }
    const value = this.obj[method]?.(...args)
    return new OptionalChain(value)
  }
  value() {
    return this.obj
  }

  /**
   * ?? 控制合并运算符的模拟
   * @param defaultValue
   * @returns
   */
  valueOnDefault(defaultValue: any) {
    if (this.obj === undefined || this.obj === null) {
      return defaultValue
    }
    return this.obj
  }
}
/**
 * 可选链工厂函数
 * @param value
 * @returns
 */
export function createOptionalChain(value: any) {
  return new OptionalChain(value)
}

/**
 * python中的range函数
 * @param start
 * @param end
 * @param step
 * @returns
 */
export function range(start: number, end?: number, step = 1) {
  return Array.from(rangeIter(start, end, step))
}
/**
 * python中的range 迭代器实现
 * @param start
 * @param end
 * @param step
 */
export function* rangeIter(start: number, end?: number, step = 1) {
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  // 进行参数检查
  if (step === 0) {
    throw new Error('step can not be zero')
  }

  if (
    !(
      Number.isInteger(start) &&
      Number.isInteger(end) &&
      Number.isInteger(step)
    )
  ) {
    throw new Error('unsupport decimal number')
  }
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      yield i
    }
  } else {
    for (let i = start; i > end; i += step) {
      yield i
    }
  }
}

/**
 * 二分查找计算插入点，找到第一个等于目标值或者左边的位置
 * @param arr 升序有序列表
 * @param val
 * @returns
 */
export function bisectLeft(arr: number[], val: number) {
  let low = 0
  let high = arr.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    // 这样得出的low最大值就是val,不会超过val
    if (val > arr[mid]) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

/**
 * 二分查找计算插入点 找到第一个大于目标值的位置
 * @param arr 升序数组
 * @param val
 * @returns
 */
export function bisectRight(arr: number[], val: number) {
  // bisectRight的插入点位于bisectLeft的右侧
  let index = bisectLeft(arr, val)
  // console.log({ index, val })
  if (val >= arr[index]) {
    return index + 1
  }

  return index
}

/**
 * 和bisect right一样，返回大于val的第一个下标
 * 在python中可用于数字表查找
 * def grade(score, breakpoints=[60, 70, 80, 90], grades='FDCBA'):
    i = bisect(breakpoints, score)
    return grades[i]
 * @param arr
 * @param val
 * @returns
 */
export function bisect(arr: number[], val: number): number {
  return bisectRight(arr, val)
}
